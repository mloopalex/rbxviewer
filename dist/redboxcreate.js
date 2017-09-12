(function () {
    $.fn.redboxcreate = function () {
        let f_verstka = this;
        let _v_src = '/assets/img/' + f_verstka.data('img');
        let _v_menu = '<div class="_v_menu"><div class="_v_hide-show_bg"></div></div>';
        let $body = $('#body');
        $body.append(_v_menu);
        let img_v = '<div class="_v_class_img" style="display: none"><img class="main_img_v" src = "' + _v_src + '"/></div>';
        $body.append(img_v);
        $('.main_img_v').load(function () {
            let v_h = $('._v_class_img').height();
            let v_w = $('._v_class_img').width();
            let v_top_show = '<div class="_v_top_bg_show"></div>';
            let v_top_show_btn = '<div class="_v_top_bg_show_btn"></div>';
            let v_top_show_btn_div = '<div class="_v_top_bg_show_btn_div"></div>';
            $('#body').addClass('toggleV');
            let _toggle = false;
            $('._v_hide-show_bg').click(function () {
                if (_toggle === false) {
                    $('.toggleV').css({
                        'height': v_h,
                        'background': 'url("' + _v_src + '") top center',
                        'position': 'relative'
                    });
                    $('#panel').hide();
                    $body.append(v_top_show);
                    $('._v_menu').append(v_top_show_btn);
                    $('._v_menu').append(v_top_show_btn_div);
                    $('._v_hide-show_bg').addClass('_v_hide-show_bg_show');
                    let _toggleBtn = false;
                    $('._v_top_bg_show_btn').click(function () {
                        if (_toggleBtn === false) {
                            $('._v_top_bg_show').css({
                                'height': v_h,
                                'background': 'url("' + _v_src + '") top center',
                            });
                            $('._v_top_bg_show').show();
                            $(this).addClass('_v_hide-show_bg_show');
                            _toggleBtn = true;
                        } else {
                            $('._v_top_bg_show').hide();
                            $(this).removeClass('_v_hide-show_bg_show');
                            _toggleBtn = false;
                        }
                    });
                    let _toggleBtn_div = false;
                    $('._v_top_bg_show_btn_div').click(function () {
                        if (_toggleBtn_div === false) {
                            $('div').addClass('_v_hide-show_bg_show_bg');
                            $(this).addClass('_v_hide-show_bg_show');
                            _toggleBtn_div = true;
                        } else {
                            $('div').removeClass('_v_hide-show_bg_show_bg');
                            $(this).removeClass('_v_hide-show_bg_show');
                            _toggleBtn_div = false;
                        }
                    });
                    _toggle = true;
                } else {
                    $('#panel').show();
                    $('.toggleV').css({
                        'height': '',
                        'background': '',
                        'position': ''
                    });
                    $('._v_top_bg_show').remove();
                    $('._v_top_bg_show_btn').remove();
                    $('._v_top_bg_show_btn_div').remove();
                    $('._v_hide-show_bg').removeClass('_v_hide-show_bg_show');
                    $('div').removeClass('_v_hide-show_bg_show_bg');
                    _toggle = false;
                }
            });
        });
    }
})();