<?php
namespace app\index\controller;

use think\Controller;
use think\Db;
use think\Query;
use think\Cache;
use think\Page;

class Index extends Controller
{
    public function index()
    {
       	$data = db('customer')->select();
        $p = new Page($data,10);
        $this->assign(['render'=>$p->render]);
        $this->assign(['data'=>$p->data]);
//        dump($p);
        return $this->fetch();
    }
    public function blog(){
        $data = db('customer')->select();
        $this->assign('data',count($data));
        
    	return $this->fetch();
    }
}
