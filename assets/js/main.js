
function Main(_id) {
    toogle = false;
    const why_choose_us_list = $("#why_choose_us_list");
    TweenLite.set(why_choose_us_list, { css: { display:"none" }});

    const see_more_btn = $("#see_more_btn");
    see_more_btn.click(function(){
        if(this.toggle === undefined){
            this.toggle = false;
        }
        this.toggle = !this.toggle;
        if(this.toggle){
            TweenLite.set(why_choose_us_list, { css: { display:"none",opacity:0 }});

        } else {
            TweenLite.set(why_choose_us_list, { css: { display:"flex",opacity:0 }});
            TweenLite.to(why_choose_us_list, { opacity:1, duration:1 });
        }
        


      });
  
    const menuactive = $("#mainmenu li");
    const m = $(menuactive[_id]).find('.menu1').children()[2];
    const label = $(menuactive[_id]).find('.menu1').children()[0];
    const page_header = $("#page_header");
    TweenLite.set(page_header, { opacity: 0 ,y:-100});
    TweenLite.to(page_header, {y:0, opacity: 1, duration:1 });
    TweenLite.set(label,{
        scaleX: 1,
        scaleY: 1
    });
    TweenLite.set(m, { scaleX: 1 });
}

function CreateBanner(){
    this.id = 0;
    const bannerlist = $("#banner_list li");
    const content = $("#banner_list li #content").children();
    for(let i=0; i<bannerlist.length; i++) {
        TweenLite.set(bannerlist[i],{opacity:0});
        TweenLite.set(content,{opacity:0});
    }
    var tl = gsap.timeline({repeat:2})
    tl.to(bannerlist[0], {opacity: 1, duration: 1});
    TweenLite.set(content[0],{x:-300})
    TweenLite.set(content[1],{x:-300})
    TweenLite.set(content[2],{x:-300})
    TweenLite.set(content[3],{scale:0})

    tl.to(content[0], {y:0,x:0,opacity: 1, duration: 1});
    tl.to(content[1], {y:0,x:0,opacity: 1, duration: 1});
    tl.to(content[2], {y:0,x:0,opacity: 1,duration: 1});
    tl.to(content[3], {scale:1,opacity: 1,duration: 1});

    tl.to(bannerlist[1], {opacity: 1, duration: 1,delay:2});
    TweenLite.set(content[4],{x:-300})
    TweenLite.set(content[5],{x:-300})
    TweenLite.set(content[6],{x:-300})
    TweenLite.set(content[7],{scale:0})


    tl.to(content[4], {y:0,x:0,opacity: 1, duration: 1});
    tl.to(content[5], {y:0,x:0,opacity: 1,duration: 1});
    tl.to(content[6], {y:0,x:0,opacity: 1, duration: 1});
    tl.to(content[7], {scale:1,opacity: 1, duration: 1});

    tl.to(bannerlist[2], {opacity: 1, duration: 1,delay:2});
    TweenLite.set(content[8],{x:-300})
    TweenLite.set(content[9],{x:-300})
    TweenLite.set(content[10],{x:-300})
    TweenLite.set(content[11],{scale:0})


    tl.to(content[8], {y:0,x:0,opacity: 1, duration: 1});
    tl.to(content[9], {y:0,x:0,opacity: 1,duration: 1});
    tl.to(content[10], {y:0,x:0,opacity: 1, duration: 1});
    tl.to(content[11], {scale:1,opacity: 1, duration: 1,delay:2});
    tl.to(content[11], {scale:1,opacity: 1, duration: .2});

}

let banner = new CreateBanner();

(function($) {
    const menulink = ["home","courses","workshops","aboutus","contactus","login"];
    function reset_buttons() {
        let menuactive = $("#mainmenu li");
        for(let i=0; i<menuactive.length;i++){
            var m = $(menuactive[i]).find('.menu1').children()[2];
            TweenLite.set(m,{scaleX:0});
        }
    }
    reset_buttons();
    function _onComplete(_url) {
        let url = String(_url).toLowerCase();
        if(url === "home"){
            url = "index"
        }
        if(url === "about us"){
            url = "aboutus"
        }
        if(url === "contact us"){
            url = "contactus"
        }
        if(url === "login") {
            window.open("https://ncepc.in/",'_blank');
        } else {
            setTimeout(() => {
                location.href=`${url}.html`;
            },1000)
        }
      
    }
    $("#mainmenu li").on('click',function(e) {
        const removeclass = () => {
            let menuactive = $("#mainmenu li"); //.find('.menu1').children()[2];
            for(let i=0; i<menuactive.length;i++){
                let m = $(menuactive[i]).find('.menu1').children()[2];
                let label = $(menuactive[i]).find('.menu1').children()[0];
                let tweenLabel = TweenLite.to(label, .5, {
                    scaleX: 1,
                    scaleY: 1,
                    ease: Circ.easeOut,
                });
                let tween = TweenLite.to(m, .5, {
                    scaleX: 0,
                    ease: Circ.easeOut,
                });
            }
        };
       removeclass();
       let menuactive = $(e.currentTarget).find('.menu1').children()[2];
       let label = $(e.currentTarget).find('.menu1').children()[0];
       let url = label.innerHTML;
       let tweenLabel = TweenLite.to(label, .5, {
        scaleX: 1.1,
        scaleY: 1.1,
        ease: Circ.easeOut,
       });
       let tween = TweenLite.to(menuactive, .5, {
        scaleX: 1,
        ease: Circ.easeOut,
        onComplete:_onComplete(url)
       });
    })
})(jQuery);

