<?php
defined('BASEPATH') OR exit('No direct script access allowed');
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

		$this->load->view('api',$data);

	}
	
}