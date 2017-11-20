<?php
	defined('BASEPATH') OR exit('No direct script access allowed');
	use \QCloud_WeApp_SDK\Auth\LoginService as LoginService;
	use QCloud_WeApp_SDK\Constants as Constants;

class Api extends CI_Controller{

	/**
		此接口将返回所有的新闻分类
	 */
	public function index(){
		//创建数据对象
		$this->load->database('news');
		//查询开启的新闻分类
		$query = $this->db->order_by('order_by','asc');
		$query = $this->db->get_where('cate',array('closed' => 1));
		$cateData = $query->result_array();

		//查询所有已审核的新闻
		$query = $this->db->get_where('news',array('audit' => 1));
		$news = $query->result_array();

		//将新闻归类到所属分类下
		$newsData = $cateData;
		foreach ($newsData as $k => $v) {
			foreach ($news as $k1 => $v1) {
				if($v['cate_id'] == $v1['cate_id']){
					$newsData[$k]['news'][] = $v1;
				}
			}
		}

		//数据转换JSON格式并返回
		$data = array(
			'cate' => $cateData,
			'catenews' => $newsData
		);
		$this->json($data);

	}

	public  function create(){
		//检查用户状态
		$result = LoginService::check();

        if ($result['loginState'] === Constants::S_AUTH) {
        	$data = $this->input->post(NULL,TRUE);//获取全部数据并XXS过滤
        	$data = json_decode($data);

        	//预定义插入数据库的数组
			$create = array(
				'uid' => $data['uid'],
				'title' => $data['title'],
				'content' => $data['content'],
				'create_time' => time(),
				'img_url' => $data['img_url']
			);
			$this->load->database();
			$this->db->insert('cUserNews',$create);    //参数1表面  参数2数据
			$result = $this->db->affected_rows(); //影响行数
			if ($result){
				$this->json([
	                'code' => 0,
	                'data' => array(
	                	'successmsg' => '添加成功'
	                ),
	                'statusCode' => 200
            	]);
			} else{
				$this->json([
	                'code' => -1,
	                'data' => array(
	                	'errormsg' => '添加失败'
	                ),
	                'statusCode' => 100
	            ]);
			}
        } else {
            $this->json([
                'code' => -1,
                'data' => array(
                	'errormsg' => '未登录'
                ),
                'statusCode' => 100
            ]);
        }



	}

	public function save(){
		//检查用户状态
		$result = LoginService::check();

        if ($result['loginState'] === Constants::S_AUTH) {
        	$data = $this->input->post(NULL,TRUE);//获取全部数据并XXS过滤
        	$data = json_decode($data);

        	//预定义插入数据库的数组
			$create = array(
				'uid' => $data['uid'],
				'title' => $data['title'],
				'content' => $data['content'],
				'create_time' => time(),
				'img_url' => $data['img_url']
			);
			$this->load->database();
			$this->db->replace('cUserNews',$create);    //参数1表面  参数2数据
			$result = $this->db->affected_rows(); //影响行数
			if ($result){
				$this->json([
	                'code' => 0,
	                'data' => array(
	                	'successmsg' => '修改成功'
	                ),
	                'statusCode' => 200
            	]);
			} else{
				$this->json([
	                'code' => -1,
	                'data' => array(
	                	'errormsg' => '修改失败'
	                ),
	                'statusCode' => 100
	            ]);
			}
        } else {
            $this->json([
                'code' => -1,
                'data' => array(
                	'errormsg' => '未登录'
                ),
                'statusCode' => 100
            ]);
        }
	}

	public function del(){
  		//检查用户状态
		$result = LoginService::check();

        if ($result['loginState'] === Constants::S_AUTH) {
        	$data = $this->input->post(NULL,TRUE);//获取全部数据并XXS过滤
        	$data = json_decode($data);

			$this->load->database();
			$this->db->delete('cUserNews',array('new_id' => $data['new_id']));
			$result = $this->db->affected_rows(); //影响行数
			if ($result){
				$this->json([
	                'code' => 0,
	                'data' => array(
	                	'successmsg' => '删除成功'
	                ),
	                'statusCode' => 200
            	]);
			} else{
				$this->json([
	                'code' => -1,
	                'data' => array(
	                	'errormsg' => '删除失败'
	                ),
	                'statusCode' => 100
	            ]);
			}
        } else {
            $this->json([
                'code' => -1,
                'data' => array(
                	'errormsg' => '未登录'
                ),
                'statusCode' => 100
            ]);
        }
	}

	//用户收藏接口
	public function collect(){
		
	}	
}