function tanchu() {
						var chudian = document.getElementById('chudian');
						var fuboxjs = document.getElementById('fuboxjs');

						var time1 = null;

						chudian.onmouseover = function() {
							move(10, 222, 300);
							console.log(1);
						}

						chudian.onmouseout = function() {
							move(-10, 221, 299);
							console.log(2);
						}

						function move(b, c, c1) {
							clearInterval(time1);
							time1 = setInterval(function() {
								var a = fuboxjs.offsetTop; //高度Top

								if(a <= c || a > c1) {
									clearInterval(time1);
								} else {
									a -= b;
								}
								fuboxjs.style.top = a + 'px';
							}, 10)
						}

					}
					tanchu();

					function part3() {
						var odiv = document.getElementsByClassName('fupart3js')[0];
						var odiv2 = document.getElementsByClassName('fupart31')[0];
						var btn = odiv2.getElementsByTagName('li');
						var div2 = odiv.getElementsByClassName('fupart33');

						for(i = 0; i < btn.length; i++) {
							btn[i].index = i;
							btn[0].className = 'hover';
							btn[i].onmouseover = function() {
								for(i = 0; i < div2.length; i++) {
									btn[i].className = ''
									div2[i].style.display = 'none'
								}
								this.className = 'hover'
								div2[this.index].style.display = 'block'
							}
						}
					}
					part3();

					function part4() {
						var odiv = document.getElementsByClassName('fupart4js')[0];
						var odiv2 = document.getElementsByClassName('fupart41')[0];
						var btn = odiv2.getElementsByTagName('li');
						var div2 = odiv.getElementsByClassName('fupart43');

						for(i = 0; i < btn.length; i++) {
							btn[i].index = i;
							btn[0].className = 'hover';
							btn[i].onmouseover = function() {
								for(i = 0; i < div2.length; i++) {
									btn[i].className = '';
									div2[i].style.display = 'none'
								}
								this.className = 'hover';
								div2[this.index].style.display = 'block'
							}
						}
					}
					part4();

					function part5() {
						var odiv = document.getElementsByClassName('fupart5js')[0];
						var odiv2 = document.getElementsByClassName('fupart51')[0];
						var btn = odiv2.getElementsByTagName('li');
						var div2 = odiv.getElementsByClassName('fupart53');

						for(i = 0; i < btn.length; i++) {
							btn[i].index = i;
							btn[0].className = 'hover';
							btn[i].onmouseover = function() {
								for(i = 0; i < div2.length; i++) {
									btn[i].className = '';
									div2[i].style.display = 'none'
								}
								this.className = 'hover';
								div2[this.index].style.display = 'block'
							}
						}
					}
					part5();

					function part6() {
						var odiv = document.getElementsByClassName('fupart6js')[0];
						var odiv2 = document.getElementsByClassName('fupart61')[0];
						var btn = odiv2.getElementsByTagName('li');
						var div2 = odiv.getElementsByClassName('fupart63');

						for(i = 0; i < btn.length; i++) {
							btn[i].index = i;
							btn[0].className = 'hover';
							btn[i].onmouseover = function() {
								for(i = 0; i < div2.length; i++) {
									btn[i].className = '';
									div2[i].style.display = 'none';
								}
								this.className = 'hover';
								div2[this.index].style.display = 'block';
							}
						}
					}
					part6();

					function part7() {
						var odiv = document.getElementsByClassName('fupart7js')[0];
						var odiv2 = document.getElementsByClassName('fupart71')[0];
						var btn = odiv2.getElementsByTagName('li');
						var div2 = odiv.getElementsByClassName('fupart73');

						for(i = 0; i < btn.length; i++) {
							btn[i].index = i;
							btn[0].className = 'hover';
							btn[i].onmouseover = function() {
								for(i = 0; i < div2.length; i++) {
									btn[i].className = '';
									div2[i].style.display = 'none';
								}
								this.className = 'hover';
								div2[this.index].style.display = 'block'
							}
						}
					}
					part7();
					fupart2js();

					function fupart2js() {
						var btnMod = document.querySelector(".fupar21")
						var imgMod = document.querySelector(".fupart22");
						var scrollMod = imgMod.querySelector(".fupart22 .scroll");
						var imgs = imgMod.querySelectorAll(".fupart22 .scroll .part22js");
						var btns = document.querySelectorAll(".fupart21 img");

						var theWidth = imgMod.offsetWidth;
						var maxLength = imgs.length;
						var next = document.querySelector(".btn_mod .next");
						var prev = document.querySelector(".btn_mod .prev");
						var activeIndex = 0; //我们规定的随图片变化的索引
						var timer = null;

						init();

						//初始化
						function init() {
							scrollMod.style.width = theWidth * maxLength + 'px';
							bind();
							autoSwitch();
						}

						//事件绑定
						function bind() {
							//绑定下一页按钮

							//给数字按钮绑定点击事件
							for(var i = 0; i < btns.length; i++) {
								btns[i].onclick = (function(index) {
									return function() {
										switchTo(index);
									}
								}(i))
							};

					
							
						

						}

						//下一页切换和自动切换
						function nextFn() {
							var index = activeIndex + 1; //点击之后的索引

							index = index > maxLength - 1 ? 0 : index;
							switchTo(index);

						}

						//切换到上一页
						function prevFn() {
							var index = activeIndex - 1 //点击之后的索引
							index = index < 0 ? maxLength - 1 : index;
							switchTo(index);
						}

						//切换到指定索引的位置
						function switchTo(theindex) {
							var start = scrollMod.offsetLeft; //起点的left值
							var end = -theindex * theWidth; //终点的left值
							var change = end - start; //变化量  （为负数，left减少，图片往左移动）（为正数，left增加，图片往右移动）
							activeIndex = theindex;

							clearInterval(scrollTimer);
							//运动定时器
							var scrollTimer = setInterval(function() {
								if(change < 0) {
									start -= 20;
									if(start <= end) {
										clearInterval(scrollTimer);
										scrollTimer = null;
									}
								} else {
									start += 20;
									if(start >= end) {
										clearInterval(scrollTimer);
										scrollTimer = null;
									}
								}
								scrollMod.style.left = start + 'px';

							}, 10)

						}

						function autoSwitch() {
							timer = setInterval(function() {
								nextFn();
							}, 4000)

						}

						function clear() {
							clearInterval(timer);
							timer = null;
						}

					}
					wTuijian();

					function wTuijian() {
						var wUl1 = document.getElementById('wUl1');
						var wNavleft = document.getElementById('wNavleft1');
						var wNavright = document.getElementById('wNavright1');
						var wTime1 = null;

						wNavleft.onclick = function() {
							wMove(124);
						} //左点击

						wNavright.onclick = function() {
							wMove(-124);
						} //右点击

						function wMove(move) {
							clearInterval(wTime1);
							wTime1 = setInterval(function() {
								var wstart = wUl1.offsetLeft;
								wstart += move;
								if(wstart > -1 || wstart < -1487) {
									clearInterval(wTime1);
								}
								wUl1.style.left = wstart + 'px';
							}, 100)
						}
					}

					wReping();

					function wReping() {
						var wUl2 = document.getElementById('wUl2');
					}
				
					var nav03 = document.getElementById('lnav01_3');
					var navd1 = nav03.querySelector('#lnav_z0');
					var navd2 = nav03.querySelector('#lnav_z01');
					var navd3 = nav03.querySelector('#lnav_z02');
					var navd4 = nav03.querySelector('#lnav_z03');
					var navd5 = nav03.querySelector('#lnav_z04');
					var navd6 = nav03.querySelector('#lnav_z05');
					var navd7 = nav03.querySelector('#lnav_z06');
					var navd8 = nav03.querySelector('#lnav_z07');
					var navd9 = nav03.querySelector('#lnav_z08');
					var navd10 = nav03.querySelector('#lnav_z09');
					var lu01 = nav03.querySelectorAll('.lul_01 li');
					var btn01 = nav03.querySelector('#lbtn01')
					var btn02 = nav03.querySelector('#lbtn02')
					var img00 = nav03.querySelector('#limg0')

					var i = 1
					btn01.onclick = function() {

						click01()

					}
					btn02.onclick = function() {

						click02()

					}

					function click01() {
						i++;
						if(i == 8) {
							i = 1
						}
						img00.src = "img/" + i + ".jpg";

					}

					function click02() {
						i--;
						if(i == 0) {
							i = 7
						}
						img00.src = "img/" + i + ".jpg";

					}

					lu01[0].onmouseover = function() {
						navd1.style.visibility = 'visible'

					}
					lu01[0].onmouseout = function() {
						navd1.style.visibility = 'hidden'

					}
					navd1.onmouseover = function() {

						navd1.style.visibility = 'visible'
						lu01[0].style.backgroundColor = '#ff6700'

					}
					navd1.onmouseout = function() {

						navd1.style.visibility = 'hidden'
						lu01[0].style.backgroundColor = ''
					}

					lu01[1].onmouseover = function() {
						navd2.style.visibility = 'visible'

					}
					lu01[1].onmouseout = function() {
						navd2.style.visibility = 'hidden'

					}
					navd2.onmouseover = function() {

						navd2.style.visibility = 'visible'
						lu01[1].style.backgroundColor = '#ff6700'

					}
					navd2.onmouseout = function() {

						navd2.style.visibility = 'hidden'
						lu01[1].style.backgroundColor = ''
					}

					lu01[2].onmouseover = function() {
						navd3.style.visibility = 'visible'

					}
					lu01[2].onmouseout = function() {
						navd3.style.visibility = 'hidden'

					}
					navd3.onmouseover = function() {

						navd3.style.visibility = 'visible'
						lu01[2].style.backgroundColor = '#ff6700'

					}
					navd3.onmouseout = function() {

						navd3.style.visibility = 'hidden'
						lu01[2].style.backgroundColor = ''
					}

					lu01[3].onmouseover = function() {
						navd4.style.visibility = 'visible'

					}
					lu01[3].onmouseout = function() {
						navd4.style.visibility = 'hidden'

					}
					navd4.onmouseover = function() {

						navd4.style.visibility = 'visible'
						lu01[3].style.backgroundColor = '#ff6700'

					}
					navd4.onmouseout = function() {

						navd4.style.visibility = 'hidden'
						lu01[3].style.backgroundColor = ''
					}

					lu01[4].onmouseover = function() {
						navd5.style.visibility = 'visible'

					}
					lu01[4].onmouseout = function() {
						navd5.style.visibility = 'hidden'

					}
					navd5.onmouseover = function() {

						navd5.style.visibility = 'visible'
						lu01[4].style.backgroundColor = '#ff6700'

					}
					navd5.onmouseout = function() {

						navd5.style.visibility = 'hidden'
						lu01[4].style.backgroundColor = ''
					}

					lu01[5].onmouseover = function() {
						navd6.style.visibility = 'visible'

					}
					lu01[5].onmouseout = function() {
						navd6.style.visibility = 'hidden'

					}
					navd6.onmouseover = function() {

						navd6.style.visibility = 'visible'
						lu01[5].style.backgroundColor = '#ff6700'

					}
					navd6.onmouseout = function() {

						navd6.style.visibility = 'hidden'
						lu01[5].style.backgroundColor = ''
					}

					lu01[6].onmouseover = function() {
						navd7.style.visibility = 'visible'

					}
					lu01[6].onmouseout = function() {
						navd7.style.visibility = 'hidden'

					}
					navd7.onmouseover = function() {

						navd7.style.visibility = 'visible'
						lu01[6].style.backgroundColor = '#ff6700'

					}
					navd7.onmouseout = function() {

						navd7.style.visibility = 'hidden'
						lu01[6].style.backgroundColor = ''
					}

					lu01[7].onmouseover = function() {
						navd8.style.visibility = 'visible'

					}
					lu01[7].onmouseout = function() {
						navd8.style.visibility = 'hidden'

					}
					navd8.onmouseover = function() {

						navd8.style.visibility = 'visible'
						lu01[7].style.backgroundColor = '#ff6700'

					}
					navd8.onmouseout = function() {

						navd8.style.visibility = 'hidden'
						lu01[7].style.backgroundColor = ''
					}

					lu01[8].onmouseover = function() {
						navd9.style.visibility = 'visible'

					}
					lu01[8].onmouseout = function() {
						navd9.style.visibility = 'hidden'

					}
					navd9.onmouseover = function() {

						navd9.style.visibility = 'visible'
						lu01[8].style.backgroundColor = '#ff6700'

					}
					navd9.onmouseout = function() {

						navd9.style.visibility = 'hidden'
						lu01[8].style.backgroundColor = ''
					}

					lu01[9].onmouseover = function() {
						navd10.style.visibility = 'visible'

					}
					lu01[9].onmouseout = function() {
						navd10.style.visibility = 'hidden'

					}
					navd10.onmouseover = function() {

						navd10.style.visibility = 'visible'
						lu01[9].style.backgroundColor = '#ff6700'

					}
					navd10.onmouseout = function() {

						navd10.style.visibility = 'hidden'
						lu01[9].style.backgroundColor = ''
					}
					var lnv01=document.getElementById('lnav01')
					var lnv010=document.getElementById('lnav00_10')
					window.onscroll=function(){
						if(document.documentElement.scrollTop>=120)
						{lnv01.style.position='fixed'
						lnv01.style.left='0'+'px'
						lnv01.style.top='0'+'px'
						lnv010.style.display='block'
						}
						if(document.documentElement.scrollTop<=120)
						{lnv01.style.position='relative'
						lnv010.style.display='none'
						
						}
						
						
						
					}


