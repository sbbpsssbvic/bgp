
(function (window, document) {
    "use strict"; function applyCustomUi(jQuery, sk_youtube_channel_videos) {
        jQuery('.container_sk_ww_search_youtube_channel_videos').show(); sk_youtube_channel_videos.find('.sk_youtube_channel_videos_slider').css({ "padding": "0 40px" }); sk_youtube_channel_videos.find(".loading-img").hide(); sk_youtube_channel_videos.css({ 'width': '100%' }); var sk_youtube_channel_videos_width = sk_youtube_channel_videos.innerWidth(); if (getDsmSetting(sk_youtube_channel_videos, "layout") == 3) { sk_youtube_channel_videos_width = sk_youtube_channel_videos.find('.swiper-container').innerWidth() - 1; sk_youtube_channel_videos_width = sk_youtube_channel_videos_width - (sk_youtube_channel_videos_width % 1); sk_youtube_channel_videos.find('.sk-yt-profile-usename').css({ 'padding-right': '20px' }); }
        const title_font_size = getDsmSetting(sk_youtube_channel_videos, "title_font_size")
        sk_youtube_channel_videos.find('span.sk-yt-profile-usename').css({ 'font-size': title_font_size + 'px' }); var column_count = sk_youtube_channel_videos.find('.column_count').text(); if (sk_youtube_channel_videos_width <= 461) { column_count = 1; } else if (sk_youtube_channel_videos_width <= 641) { column_count = column_count > 1 ? 2 : 1; }
        var arrow_background_color = getDsmSetting(sk_youtube_channel_videos, "arrow_background_color"); var arrow_color = getDsmSetting(sk_youtube_channel_videos, "arrow_color"); var arrow_opacity = getDsmSetting(sk_youtube_channel_videos, "arrow_opacity"); var layout = getDsmSetting(sk_youtube_channel_videos, "layout"); var border_size = 0; var background_color = sk_youtube_channel_videos.find('.details_bg_color').text(); var space_between_images = sk_youtube_channel_videos.find('.space_between_images').text(); var margin_between_images = parseFloat(space_between_images).toFixed(2) / 2; var scroll_width = document.body.scrollWidth - document.body.offsetWidth; var total_space_between_images = parseFloat(space_between_images).toFixed(2) * (parseFloat(column_count)); var pic_width = (parseFloat(sk_youtube_channel_videos_width).toFixed(0) - parseFloat(total_space_between_images).toFixed(0)) / parseFloat(column_count).toFixed(0) - ((column_count) * 0.2); var sk_ig_all_posts_minus_spaces = parseFloat(sk_youtube_channel_videos_width).toFixed(2) - parseFloat(total_space_between_images).toFixed(2); var bottom_button_container_width = parseFloat(sk_youtube_channel_videos_width).toFixed(2) - (parseFloat(space_between_images).toFixed(2) * 2); var bottom_button_width = parseFloat(sk_youtube_channel_videos_width).toFixed(2) / parseFloat(2).toFixed(2); var font_family = sk_youtube_channel_videos.find('.font_family').text(); var details_bg_color = sk_youtube_channel_videos.find('.details_bg_color').text(); var details_font_color = sk_youtube_channel_videos.find('.details_font_color').text(); var details_link_color = sk_youtube_channel_videos.find('.details_link_color').text(); var details_link_hover_color = sk_youtube_channel_videos.find('.details_link_hover_color').text(); var button_bg_color = sk_youtube_channel_videos.find('.button_bg_color').text(); var button_text_color = sk_youtube_channel_videos.find('.button_text_color').text(); var button_hover_bg_color = sk_youtube_channel_videos.find('.button_hover_bg_color').text(); var button_hover_text_color = sk_youtube_channel_videos.find('.button_hover_text_color').text(); var post_item_type = sk_youtube_channel_videos.find('.post_item_type').text(); var show_pop_up = sk_youtube_channel_videos.find('.show_pop_up').text(); var pic_height = (parseFloat(pic_width) / parseFloat(2)) + 10; sk_youtube_channel_videos.find('.sk-ww-youtube-channel-videos-item').css({ 'width': pic_width + 'px', 'margin': margin_between_images + 'px', 'background-color': background_color, 'padding': border_size, }); setTimeout(function () { sk_youtube_channel_videos.find('.sk-ww-youtube-channel-videos-item').css({ 'width': pic_width + 'px', 'margin': margin_between_images + 'px', 'background-color': background_color, 'padding': border_size, }); }, 1000); sk_youtube_channel_videos.find('.sk-ww-youtube-channel-videos-item-content').css({ 'width': pic_width + 'px', 'background-color': background_color, 'padding': border_size, 'height': pic_height + 'px' }); sk_youtube_channel_videos.find('.sk-ww-youtube-channel-videos-item .sk_inline_youtube_player').css({ 'width': pic_width + 'px', 'height': pic_height + 'px' }); if (layout == 3) { sk_youtube_channel_videos.find('.youtube-user-root-container').css({ "width": "auto" }); sk_youtube_channel_videos.find('.youtube-user-root-container').css({ "padding": "0 40px 10px 40px" }); sk_youtube_channel_videos.find('.sk-yt-all-posts').css({ "display": "flex" }); if (jQuery(document).width() <= 780) { sk_youtube_channel_videos.find('.sk-yt-profile-count-item').css({ "display": "inline-grid" }); sk_youtube_channel_videos.find('.sk-yt-all-posts').css({ "display": "block" }); } }
        sk_youtube_channel_videos.find('.sk-yt-post-hover').css({ 'width': pic_width + 'px', 'margin': 0, 'padding': 0, 'height': pic_height + 'px' }); if (post_item_type == 0) { sk_youtube_channel_videos.find('.sk-ww-yt-video-info').css({ 'position': 'absolute', 'opacity': 0.4, 'background': 'transparent', 'z-index': '1', 'width': pic_width + 'px', 'margin': 0, 'top': 0, 'height': pic_height + 'px' }); sk_youtube_channel_videos.find('.sk-ww-yt-description').css({ 'padding-right': '10px' }); sk_youtube_channel_videos.find('.sk-ww-yt-title,.sk-ww-yt-description').css({ 'padding': '0px 10px' }); sk_youtube_channel_videos.find('.sk-ww-yt-date,.sk-yt-likes-comments').css({ 'padding': '10px' }); }
        else { sk_youtube_channel_videos.find('.sk-ww-yt-title').css({ 'padding': '4px 2px' }); sk_youtube_channel_videos.find('.sk-ww-yt-date,.sk-yt-likes-comments').css({ 'padding': '4px 2px', }); sk_youtube_channel_videos.find('.sk-yt-actual-title').hide(); sk_youtube_channel_videos.find('.sk-yt-title').css('background', 'none'); }
        if (getDsmSetting(sk_youtube_channel_videos, 'show_post_hover') == 0 || getDsmSetting(sk_youtube_channel_videos, 'show_pop_up') == 0) { sk_youtube_channel_videos.find('.sk-ww-youtube-channel-videos-item .sk-ww-yt-video-info').css('visibility', 'hidden'); sk_youtube_channel_videos.find('.sk-ww-youtube-channel-videos-item .fa-youtube-play').css('visibility', 'hidden'); }
        sk_youtube_channel_videos.find('.sk-ww-yt-description').addClass('limit-two-lines'); sk_youtube_channel_videos.find('.sk-ww-yt-title').addClass('limit-one-line'); sk_youtube_channel_videos.find('.limit-one-line,.limit-two-lines').css({ 'width': pic_width - 15 + "px" }); sk_youtube_channel_videos.css({ 'font-family': font_family, 'background-color': details_bg_color, 'width': sk_youtube_channel_videos_width }); jQuery('.sk-pop-yt-post').css({ 'font-family': font_family }); sk_youtube_channel_videos.find('.youtube-user-root-container, .sk-warning-message').css({ 'color': details_font_color }); sk_youtube_channel_videos.find('.youtube-user-root-container a').css({ 'color': details_link_color }); jQuery(".youtube-user-root-container a").mouseover(function () { jQuery(this).css({ 'color': details_link_hover_color }); }).mouseout(function () { jQuery(this).css({ 'color': details_link_color }); }); jQuery(".sk-ww-yt-video-info").click(function () { var clicked_element = this; jQuery(clicked_element).find('.fa-youtube-play').addClass("fa fa-spinner fa-pulse fa-1x fa-fw stats_loading"); jQuery(clicked_element).find('.fa-youtube-play').removeClass("fa-youtube-play"); }); sk_youtube_channel_videos.find(".sk-yt-load-more-posts").css({ 'margin-bottom': 8 + 'px' }); sk_youtube_channel_videos.find(".youtube-user-container, .sk-yt-load-more-posts, .sk-yt-bottom-follow-btn").css({ 'background-color': button_bg_color, 'border-color': button_bg_color, 'color': button_text_color }); jQuery(".more-desc").click(function () {
            var el = this; if (el.innerText == "SHOW MORE") { el.innerText = "SHOW LESS"; jQuery(".complete-desc").css({ 'display': 'block' }); }
            else { el.innerText = "SHOW MORE"; jQuery(".complete-desc").css({ 'display': 'none' }); }
        }); sk_youtube_channel_videos.find(".youtube-user-container, .sk-yt-load-more-posts, .sk-yt-bottom-follow-btn").mouseover(function () { jQuery(this).css({ 'background-color': button_hover_bg_color, 'border-color': button_hover_bg_color, 'color': button_hover_text_color }); }).mouseout(function () { jQuery(this).css({ 'background-color': button_bg_color, 'border-color': button_bg_color, 'color': button_text_color }); }); var padding_sk_ig_bottom_btn_container = margin_between_images; if (padding_sk_ig_bottom_btn_container == 0) { padding_sk_ig_bottom_btn_container = 5; }
        sk_youtube_channel_videos.find(".sk-yt-bottom-btn-container").css({ 'padding': padding_sk_ig_bottom_btn_container + 'px' }); sk_youtube_channel_videos.find(".sk-yt-bottom-btn-container-slider").css({ 'padding': "0px 40px 10px" }); jQuery(".sk_yt_channel_feed_videowrapper, .sk_youtube_channel_player, .mfp-close, .prev_sk_yt_channel_post, .next_sk_yt_channel_post").mouseover(function () { jQuery(".mfp-close, .prev_sk_yt_channel_post, .next_sk_yt_channel_post").attr("style", "opacity: 1 !important;"); }).mouseout(function () { jQuery(".mfp-close, .prev_sk_yt_channel_post, .next_sk_yt_channel_post").attr("style", "opacity: 1 !important;"); }); jQuery(".sk-ww-yt-video-info").mouseover(function () { jQuery(this).css({ 'position': 'absolute', 'opacity': 1, 'background': 'transparent', 'z-index': '1', 'width': pic_width + 'px', 'margin': 0, 'top': 0, 'height': pic_height + 'px', 'transition': '0.3s', 'color': '#fff' }); }).mouseout(function () { jQuery(this).css({ 'position': 'absolute', 'opacity': 0.4, 'background': 'transparent', 'z-index': '1', 'width': pic_width + 'px', 'margin': 0, 'top': 0, 'height': pic_height + 'px', 'transition': '0.3s', 'color': '#fff' }); }); jQuery('.sk_powered_by a').css({ 'background-color': details_bg_color, 'color': details_font_color, 'font-size': getDsmSetting(sk_youtube_channel_videos, "details_font_size"), }); sk_youtube_channel_videos.find('.sk-title-container, .sk-yt-channel-description').css({ "font-size": getDsmSetting(sk_youtube_channel_videos, "details_font_size") + "px" }); applyTitleStyle(sk_youtube_channel_videos)
        sk_youtube_channel_videos.find('.sk-fb-event-item, .sk_powered_by').css({ 'margin-bottom': getDsmSetting(sk_youtube_channel_videos, "space_between_events") + 'px' }); if (getDsmSetting(sk_youtube_channel_videos, "layout") == 3) { skLayoutSliderArrowUI(sk_youtube_channel_videos); setTimeout(function () { skLayoutSliderArrowUI(sk_youtube_channel_videos, "block"); }, 100); setTimeout(function () { skLayoutSliderArrowUI(sk_youtube_channel_videos, "block"); }, 300); }
        if (getDsmSetting(sk_youtube_channel_videos, "show_pop_up") == 0) { loadYTScript(sk_youtube_channel_videos); }
        if (getDsmSetting(sk_youtube_channel_videos, 'title_all_caps') == 1) { sk_youtube_channel_videos.find(".sk-yt-profile-usename").css({ 'textTransform': 'uppercase' }) }
        if (getDsmSetting(sk_youtube_channel_videos, 'details_all_caps') == 1) { sk_youtube_channel_videos.find(".sk-title-container, .sk-yt-profile-info").css({ 'textTransform': 'uppercase' }) }
        if (sk_youtube_channel_videos.find(".swiper-slide") && sk_youtube_channel_videos.find(".swiper-slide").length > 1) { setTimeout(function () { sk_youtube_channel_videos.find(".swiper-button-next").removeClass("swiper-button-disabled"); }, 300); }
        jQuery(".fa-youtube-play").css({ "display": "none" }); setTimeout(function () { jQuery(".fa-youtube-play").css({ "display": "inline-block" }); }, 3500); jQuery('head').append('<style type="text/css">' + getDsmSetting(sk_youtube_channel_videos, "custom_css") + '</style>'); makeResponsive(jQuery, sk_youtube_channel_videos)
    }
    function applyTitleStyle(sk_youtube_channel_videos) {
        var show_full_video_title = sk_youtube_channel_videos.find('.show_full_video_title').text(); var content_padding = parseInt(getDsmSetting(sk_youtube_channel_videos, "post_content_padding")); content_padding = content_padding ? content_padding : 30; if (sk_youtube_channel_videos.width() < 480) { content_padding = 20; }
        let title_container = sk_youtube_channel_videos.find('.sk-title-container'); title_container.css({ 'display': 'inline-block', "overflow": "hidden", "font-weight": "bold", "line-height": "1.5em" }); sk_youtube_channel_videos.find('.sk-title-padding').css({ 'display': 'inline-block', 'padding': content_padding + 'px' })
        if (show_full_video_title != 1) { title_container.css({ "text-overflow": "unset", "text-overflow": "ellipsis", "-webkit-line-clamp": "1", "-webkit-box-orient": "vertical", }); }
        sk_youtube_channel_videos.find('.sk-yt-pop-up-content').css({ "padding": content_padding + "px", }); var max_height = 0; title_container.each(function () { var current_height = jQuery(this).height(); if (current_height > max_height) { max_height = current_height; } }); title_container.css("height", max_height + "px");
    }
    function applyPopUpColors(popup_container) {
        var pop_up_bg_color = popup_container.find('.pop_up_bg_color').text(); var pop_up_font_color = popup_container.find('.pop_up_font_color').text(); var pop_up_link_color = popup_container.find('.pop_up_link_color').text(); popup_container.find('.sk_youtube_channel_popup_container, .yt-vid-desc-container').css({ 'color': pop_up_font_color, 'background': pop_up_bg_color })
        jQuery('.sk-yt-pop-up-content').css({ 'color': pop_up_font_color, 'background': pop_up_bg_color }); jQuery('.stats_style').css({ 'color': pop_up_font_color }); jQuery('.sk-yt-pop-up-content a').css({ 'color': pop_up_link_color });
    } function loadBioInformation(sk_youtube_channel_videos, data, search_term) {
        var show_profile_picture = sk_youtube_channel_videos.find('.show_profile_picture').text(); var show_profile_follow_button = sk_youtube_channel_videos.find('.show_profile_follow_button').text(); var show_profile_posts_count = sk_youtube_channel_videos.find('.show_profile_posts_count').text(); var show_profile_follower_count = sk_youtube_channel_videos.find('.show_profile_follower_count').text(); var show_profile_following_count = sk_youtube_channel_videos.find('.show_profile_following_count').text(); var show_profile_name = sk_youtube_channel_videos.find('.show_profile_name').text(); var show_profile_description = sk_youtube_channel_videos.find('.show_profile_description').text(); var show_search_box = sk_youtube_channel_videos.find('.show_search_box').text(); var videos_text = sk_youtube_channel_videos.find('.videos_text').text(); var subscribers_text = sk_youtube_channel_videos.find('.subscribers_text').text(); var views_text = sk_youtube_channel_videos.find('.views_text').text(); var subscribe_text = sk_youtube_channel_videos.find('.subscribe_text').text(); var use_youtube_channel_id = sk_youtube_channel_videos.find('.use_youtube_channel_id').text(); var post_items = ""; if (show_search_box == 0 && show_profile_picture == 0 && show_profile_follow_button == 0 && show_profile_posts_count == 0 && show_profile_follower_count == 0 && show_profile_following_count == 0 && show_profile_name == 0 && show_profile_description == 0) { }
        else {
            post_items += "<div class='content_container_sk_ww_youtube_channel_videos'>"; post_items += "<div class='youtube-user-root-container'>"; if (show_profile_picture == 1) { post_items += "<div class='youtube-profile-pic_container'><div class='youtube-profile-pic' id='yt-prof-pic' data-embed='" + data.bio.embed_id + "' data-id='" + data.bio.id + "' style='background-image:url(" + data.bio.thumbnail + ");'></div></div>"; }
            post_items += "<div class='sk-yt-profile-info'>"; post_items += "<div style='margin-bottom:10px;'>"; post_items += "<div class='sk_channel_name'>"; if (show_profile_name == 1) {
                if (getDsmSetting(sk_youtube_channel_videos, "use_youtube_channel_id") == "1") { post_items += "<span onclick=\"window.open('https://www.youtube.com/channel/" + data.bio.channel_id + "');\" class='sk-yt-profile-usename'>" + data.bio.title + "</span>"; }
                else { post_items += "<span onclick=\"window.open('https://www.youtube.com/user/" + getDsmSetting(sk_youtube_channel_videos, "username") + "');\" class='sk-yt-profile-usename'>" + data.bio.title + "</span>"; }
            }
            if (show_search_box == 1) {
                post_items += "<div class='ww-sk-searchbox-container'>"; post_items += "<div class='container_sk_ww_search_youtube_channel_videos pull-right'>"; post_items += "<div class='container_sk_ww_input_and_icon'>"; post_items += "<form class='sk_ww_search_youtube_channel_videos_form'>"; post_items += "<input type='text' class='sk_ww_search_youtube_channel_videos' placeholder='Search...' value='" + search_term + "'/>"; if (search_term) { post_items += "<i class='fa fa-times sk_ww_search_icon' aria-hidden='true'></i>"; }
                else { post_items += "<i class='fa fa-search sk_ww_search_icon' aria-hidden='true'></i>"; }
                post_items += "</form>"; post_items += "</div>"; post_items += "</div>"; post_items += "</div>";
            }
            post_items += "</div >"; if (show_profile_follow_button == 1) {
                post_items += "<div class='sk_subscribe_button' >"; if (getDsmSetting(sk_youtube_channel_videos, "use_youtube_channel_id") == "1") { post_items += "<button type='button' onclick=\"window.open('https://www.youtube.com/channel/" + data.bio.channel_id + "?sub_confirmation=1');\" class='youtube-user-container'>"; } else { post_items += "<button type='button' onclick=\"window.open('https://www.youtube.com/user/" + getDsmSetting(sk_youtube_channel_videos, "username") + "?sub_confirmation=1');\" class='youtube-user-container'>"; }
                post_items += "<span style='position: relative; top: calc(50% - 35px); font-family: FontAwesome !important;'>&#xf16a;</span> " + subscribe_text; post_items += "</button>"; post_items += "</div>";
            }
            post_items += "<div class='sk-yt-profile-counts'>"; if (show_profile_posts_count == 1 && data.bio.video_count) { post_items += "<span class='sk-yt-profile-count-item'><span class='f-w-b sk-yt-profile-count-item-views'>" + removeZeroValue(data.bio.video_count) + "</span> " + videos_text + "</span>"; }
            if (show_profile_follower_count == 1 && data.bio.subscriber_count) { post_items += "<span class='sk-yt-profile-count-item'><span class='f-w-b'>" + removeZeroValue(data.bio.subscriber_count) + "</span> " + subscribers_text + "</span>"; }
            if (show_profile_following_count == 1 && data.bio.view_count) { post_items += "<span class='sk-yt-profile-count-item'><span class='f-w-b'>" + removeZeroValue(data.bio.view_count) + "</span> " + views_text + "</span>"; }
            post_items += "</div>"; post_items += "</div>"; post_items += "<div>"; if (show_profile_description == 1) { post_items += " <div class='sk-yt-channel-description display-default' >" + data.bio.description + "</div> "; }
            post_items += "</div>"; post_items += "</div>"; post_items += "</div>";
        }
        return post_items;
    }
    function requestFeedData(sk_youtube_channel_videos) {
        var embed_id = getDsmEmbedId(sk_youtube_channel_videos); var json_url = app_file_server_url + embed_id + ".json?nocache=" + (new Date()).getTime(); fetch(json_url, { method: 'get' }).then(function (response) {
            if (!response.ok) { generateSolutionMessage(sk_youtube_channel_videos, embed_id); }
            else { response.json().then(function (data) { original_data = data; loadFeed(sk_youtube_channel_videos); }); }
        }).catch(function (err) { generateSolutionMessage(sk_youtube_channel_videos, embed_id); });
    }
    function loadFeed(sk_youtube_channel_videos) {
        var embed_id = getDsmEmbedId(sk_youtube_channel_videos); var search_term = sk_youtube_channel_videos.find(".sk_ww_search_youtube_channel_videos").val(); var json_url = app_file_server_url + embed_id + ".json?nocache=" + (new Date()).getTime(); if (!search_term) { search_term = ""; }
        var show_load_more_button = sk_youtube_channel_videos.find('.show_load_more_button').text(); var show_bottom_follow_button = sk_youtube_channel_videos.find('.show_bottom_follow_button').text(); var post_count = sk_youtube_channel_videos.find('.post_count').text(); var subscribe_text = sk_youtube_channel_videos.find('.subscribe_text').text(); var load_more_videos_text = sk_youtube_channel_videos.find('.load_more_videos_text').text(); var use_youtube_channel_id = sk_youtube_channel_videos.find('.use_youtube_channel_id').text(); var data = original_data; data_storage = data.posts; if (search_term) { data_storage = applySearchFeature(data_storage, search_term); }
        if (data_storage) { data_storage = moderationTabFeature(sk_youtube_channel_videos, data_storage); }
        data_storage = sortVideosBy(data_storage, sk_youtube_channel_videos); sk_youtube_channel_videos.find('.content_container_sk_ww_youtube_channel_videos').remove(); sk_youtube_channel_videos.find('.sk-yt-all-posts,.sk-yt-bottom-btn-container').html(''); if (original_data.user_info && !widgetValidation(sk_youtube_channel_videos, original_data)) { return; }
        else if (original_data.user_info.show_feed == false) { sk_youtube_channel_videos.prepend(original_data.user_info.message); sk_youtube_channel_videos.find('.loading-img').hide(); sk_youtube_channel_videos.find('.first_loading_animation').hide(); sk_youtube_channel_videos.find('.sk_fb_events_options').hide(); return; }
        else if (original_data.success == false) { generateSolutionMessage(sk_youtube_channel_videos, embed_id); return; }
        else if (!data_storage) { generateSolutionMessage(sk_youtube_channel_videos, embed_id); return; }
        else {
            var post_items = ""; if (data && data.bio) { post_items += loadBioInformation(sk_youtube_channel_videos, data, search_term); post_items += "<input type='hidden' id='profile_img_hidden' value='" + data.bio.thumbnail + "'>"; post_items += "<input type='hidden' id='subs_count_hidden' value='" + data.bio.subscriber_count + "'>"; }
            if (data_storage.length == 0 && data.search_term != '' && data.search_term) { post_items += "<div class='sk-warning-message'>No video found with keyword : " + data.search_term + "</div>"; }
            else if (data_storage.length == 0) { post_items += "<div class='sk-warning-message'>No video found.</div>"; }
            if (getDsmSetting(sk_youtube_channel_videos, "layout") != 3) {
                post_items += "<div class='sk-yt-all-posts'>"; var enable_button = false; last_key = parseInt(getDsmSetting(sk_youtube_channel_videos, 'post_count')); for (var i = 0; i < last_key; i++) { if (typeof data_storage[i] != 'undefined') { post_items += getFeedItem(data_storage[i], sk_youtube_channel_videos); displayDuration(sk_youtube_channel_videos, data_storage[i].id); } }
                if (data_storage.length > last_key) { enable_button = true; }
                post_items += "</div>"; if (show_load_more_button == 1 || show_bottom_follow_button == 1) {
                    post_items += "<div class='sk-yt-bottom-btn-container'>"; if (show_load_more_button == 1 && enable_button) { post_items += "<button type='button' class='sk-yt-load-more-posts'>" + load_more_videos_text + "</button>"; }
                    post_items += "</div>";
                }
            }
            else {
                var column_count = getDsmSetting(sk_youtube_channel_videos, 'column_count'); column_count = parseInt(column_count); if (jQuery(document).width() < 480) { column_count = 1; }
                else if (jQuery(document).width() < 750) { column_count = column_count > 2 ? 2 : column_count; }
                post_items += "<div class='sk_youtube_channel_videos_slider'>"; post_items += "<button type='button' class='swiper-button-next ' style='pointer-events: all;'>"; post_items += "<i class='sk_arrow sk_right_arrow'></i>"; post_items += "</button>"; post_items += "<button type='button' class='swiper-button-prev' style='pointer-events: all;'>"; post_items += "<i class='sk_arrow sk_left_arrow'></i>"; post_items += "</button>"; post_items += "<div class='swiper-container swiper-layout-slider'>"; post_items += "<div style='height: auto !important;' class='swiper-wrapper'>"; var last_index = 0; var data_slider = data_storage; var pages = Math.ceil(data_slider.length / column_count); for (var slide = 1; slide <= pages; slide++) {
                    post_items += "<div class='swiper-slide'>"; post_items += "<div class='sk-yt-all-posts'>"; var slide_data = getPaginationResult(sk_youtube_channel_videos, data_slider, slide, column_count); jQuery.each(slide_data, function (key, val) {
                        if (typeof val != 'undefined')
                            post_items += getFeedItem(val, sk_youtube_channel_videos);
                    }); post_items += "</div>"; post_items += "</div>";
                }
                post_items += "</div>"; post_items += "</div>"; post_items += "</div>";
            }
            post_items += skGetBranding(sk_youtube_channel_videos, original_data.user_info); sk_youtube_channel_videos.append(post_items); if (getDsmSetting(sk_youtube_channel_videos, "show_profile_picture") == 1 && jQuery(document).width() > 480) { sk_youtube_channel_videos.find(".sk-yt-channel-description").addClass("sk-yt-channel-description-margin"); }
            if (getDsmSetting(sk_youtube_channel_videos, 'layout') == 3) { skSliderLayoutSettings(sk_youtube_channel_videos); getYoutubeVideoIframe(jQuery(".swiper-slide-active").find(".sk-yt-playlist-iframe-container"), sk_youtube_channel_videos); }
            replaceContentWithLinks(sk_youtube_channel_videos.find(".sk-yt-channel-description"), sk_youtube_channel_videos); applyCustomUi(jQuery, sk_youtube_channel_videos); replaceThumbIfNotExists();
        }
        sk_increaseView(data.user_info);
    }
    function getFeedItem(val, sk_youtube_channel_videos) {
        var details_font_color = sk_youtube_channel_videos.find('.details_font_color').text(); var thumbnail_size = sk_youtube_channel_videos.find('.thumbnail_size').text(); var show_pop_up = sk_youtube_channel_videos.find('.show_pop_up').text(); var post_item_type = sk_youtube_channel_videos.find('.post_item_type').text(); var show_post_date = sk_youtube_channel_videos.find('.show_post_date').text(); var show_post_title = sk_youtube_channel_videos.find('.show_post_title').text(); var show_post_hover = sk_youtube_channel_videos.find('.show_post_hover').text(); var show_duration = sk_youtube_channel_videos.find('.show_duration').text(); var show_full_video_title = sk_youtube_channel_videos.find('.show_full_video_title').text(); var embed_id = getDsmEmbedId(sk_youtube_channel_videos); var post_items = ""; post_items += "<div class='sk-ww-youtube-channel-videos-item' data-id='" + val.id + "'>"; var thumbnail_size = getDsmSetting(sk_youtube_channel_videos, 'thumbnail_size'); var thumbnail = ""; if (typeof val.thumbnail.low != 'undefined') {
            if (thumbnail_size == 'low') { thumbnail = val.thumbnail.low; }
            else if (thumbnail_size == 'medium') { thumbnail = val.thumbnail.medium; }
            else if (thumbnail_size == 'high') { thumbnail = val.thumbnail.high; }
        }
        else { thumbnail = val.thumbnail; }
        post_items += "<div class='sk-ww-youtube-channel-videos-item-content' id='" + val.id + "' data-thumb='" + thumbnail + "' data-id='" + val.id + "' style='background-image: url(" + thumbnail + ");'>"; if (show_pop_up == 0) {
            if (getDsmSetting(sk_youtube_channel_videos, "layout") == 3) { post_items += "<div class='sk-yt-playlist-iframe-container' data-id='" + val.id + "'></div>" }
            else { post_items += "<iframe class='sk_inline_youtube_player' id='" + val.id + "' width='853' height='480' src='https://www.youtube.com/embed/" + val.id + "?showinfo=1&autoplay=0&enablejsapi=1' frameborder='0' allowfullscreen></iframe>"; }
        }
        post_items += "<div class='sk-yt-post-hover' data-video-id='" + val.id + "'>"; post_items += "</div>"; post_items += "</div>"; if (show_post_title == 1) {
            var post_title = val.title; let character_limit = parseInt(getDsmSetting(sk_youtube_channel_videos, 'character_limit')); if (show_full_video_title != 1 && character_limit > 0 && val.title.length > character_limit) { post_title = val.title.substring(0, character_limit) + '...'; }
            post_items += "<div class='sk-title-padding'>"
            post_items += "<div title='" + val.title + "' style='color: " + details_font_color + "' class='sk-title-container'>"
            post_items += encodeHtmlSpecialCharacter(post_title); post_items += "</div>"; post_items += "</div>";
        }
        post_items += '<div style="text-align: center; font-size: 60px; color: white;" data-video-id="' + val.id + '" class="sk-ww-yt-video-info sk-ww-yt-video-info-' + val.id + '">'; post_items += '<i class="fa fa-youtube-play" style="position: relative; top: calc(50% - 35px);"></i></div>'; post_items += "</div>"; return post_items;
    }
    var env_urls = skGetEnvironmentUrls('youtube-channel-videos'); var app_url = env_urls.app_url; var app_backend_url = env_urls.app_backend_url; var app_file_server_url = env_urls.app_file_server_url; var sk_img_url = env_urls.sk_img_url; var sk_app_url = env_urls.sk_app_url; var sk_api_url = env_urls.sk_api_url; var data_storage; var last_key; var original_data; var yt_players = []; var yt_ids = []; var additional_error_messages = ["<li>Make sure your channel have at least one video.</li>", "<li>Please enter your own <a href='https://www.youtube.com/watch?v=pP4zvduVAqo' target='_blank'>YouTube API key.</li>", "<li>Make sure your <a href='https://www.sociablekit.com/find-youtube-channel-id/' target='_blank'>YouTube Channel ID</a> or <a href='https://www.sociablekit.com/find-youtube-channel-custom-name/' target='_blanke'>YouTube Custom Name</a> is correct.</li>", "<li>Make sure your YouTube channel is public.</li>"]; var el = document.getElementsByClassName('sk-ww-youtube-channel-videos')[0]; if (el == undefined) { var el = document.getElementsByClassName('dsm-ww-youtube-channel-videos')[0]; el.className = "sk-ww-youtube-channel-videos"; }
    el.innerHTML = "<div class='first_loading_animation' style='text-align:center; width:100%;'><img src='" + app_url + "images/ripple.svg' class='loading-img' style='width:auto !important;' /></div>"; loadCssFile(app_url + "libs/js/swiper/swiper.min.css"); loadCssFile(app_url + "libs/js/swiper/swiper.css?v=ranndomchars"); loadCssFile(app_url + "libs/js/magnific-popup/magnific-popup.css"); loadCssFile("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"); var j_version = 3; if (window.jQuery !== undefined) { var j_version = window.jQuery.fn.jquery; j_version = j_version ? parseInt(j_version.charAt(0)) : 4; }
    if (window.jQuery === undefined || j_version > 2) {
        var script_tag = document.createElement('script'); script_tag.setAttribute("type", "text/javascript"); script_tag.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"); if (script_tag.readyState) { script_tag.onreadystatechange = function () { if (this.readyState == 'complete' || this.readyState == 'loaded') { scriptLoadHandler(); } }; } else { script_tag.onload = scriptLoadHandler; }
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
    } else { jQuery = window.jQuery; scriptLoadHandler(); }
    function loadScript(url, callback) {
        var scriptTag = document.createElement('script'); scriptTag.setAttribute("type", "text/javascript"); scriptTag.setAttribute("src", url); if (typeof callback !== "undefined") { if (scriptTag.readyState) { scriptTag.onreadystatechange = function () { if (this.readyState === 'complete' || this.readyState === 'loaded') { callback(); } }; } else { scriptTag.onload = callback; } }
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(scriptTag);
    }
    function scriptLoadHandler() { loadScript(app_url + "libs/js/swiper/swiper.min.js", function () { loadScript(app_url + "libs/js/magnific-popup/jquery.magnific-popup.js", function () { loadScript(app_url + "libs/js/moment.js", function () { loadScript(app_url + "libs/js/moment-timezone.js", function () { $ = jQuery = window.jQuery.noConflict(true); initManificPopupPlugin(jQuery); main(); loadScript("https://www.youtube.com/player_api", function () { }); }); }); }); }); }
    function loadCssFile(filename) { var fileref = document.createElement("link"); fileref.setAttribute("rel", "stylesheet"); fileref.setAttribute("type", "text/css"); fileref.setAttribute("href", filename); if (typeof fileref != "undefined") { document.getElementsByTagName("head")[0].appendChild(fileref); } } function showDsmYouTubeChannelFeedPopUp(jQuery, content_src, clicked_element) {
        var sk_youtube_channel_videos = jQuery(clicked_element).closest('.sk-ww-youtube-channel-videos'); var show_pop_up_on_middle = sk_youtube_channel_videos.find('.show_pop_up_on_middle').text(); var clicked_element_pos = jQuery(clicked_element).offset().top; var relative_pos = clicked_element_pos - jQuery(window).scrollTop() - 200; applyPopUpColors(sk_youtube_channel_videos); if (typeof jQuery.magnificPopup === "undefined")
            initManificPopupPlugin(jQuery); if (chosen_video == true)
            setTimeout(function () {
                jQuery.magnificPopup.open({
                    items: { src: content_src }, 'type': 'inline', callbacks: {
                        open: function () {
                            if (jQuery('.mfp-content .sk_yt_channel_feed_videowrapper video').get(0) !== undefined) { jQuery('.mfp-content .sk_yt_channel_feed_videowrapper video').get(0).play(); }
                            jQuery('body').addClass('magnificpopupnoscroll'); replaceContentWithLinks(jQuery(".mfp-content").find(".teaser"), sk_youtube_channel_videos); replaceContentWithLinks(jQuery(".mfp-content").find(".complete-desc"), sk_youtube_channel_videos); replaceContentWithLinks(jQuery(".mfp-content").find(".sk_yt_video_title"), sk_youtube_channel_videos); var details_font_size = sk_youtube_channel_videos.find('.details_font_size').text(); var popup_link_hover_color = sk_youtube_channel_videos.find('.popup_link_hover_color').text(); var pop_up_link_color = sk_youtube_channel_videos.find('.pop_up_link_color').text(); jQuery(".yt-video-owner, .yt-vid-desc-container, .more-desc").css({ 'font-size': details_font_size + "px" }); jQuery(".sk-yt-pop-up-content a").mouseover(function () { jQuery(this).css({ 'color': popup_link_hover_color }); }).mouseout(function () { jQuery(this).css({ 'color': pop_up_link_color }); }); applyPopUpColors(sk_youtube_channel_videos);
                        }, close: function () { clicked_element.closest('.sk-ww-youtube-channel-videos').find('.sk_pop_up_content').html(""); clicked_element.find('.fa-spinner').addClass("fa fa-youtube-play"); clicked_element.find('.fa-spinner').removeClass("fa-spinner fa-pulse fa-1x fa-fw stats_loading"); jQuery('body').removeClass('magnificpopupnoscroll'); }
                    }
                });
            }, 1000); else { jQuery.magnificPopup.open({ items: { src: content_src }, 'type': 'inline', callbacks: { open: function () { if (jQuery('.mfp-content .sk_yt_channel_feed_videowrapper video').get(0) !== undefined) { jQuery('.mfp-content .sk_yt_channel_feed_videowrapper video').get(0).play(); } }, close: function () { clicked_element.closest('.sk-ww-youtube-channel-videos').find('.sk_pop_up_content').html(""); clicked_element.find('.fa-spinner').addClass("fa fa-youtube-play"); clicked_element.find('.fa-spinner').removeClass("fa-spinner fa-pulse fa-1x fa-fw stats_loading"); } } }); }
    }
    function hidePopUp() { if (jQuery.magnificPopup) { jQuery.magnificPopup.close(); } }
    function showSharePopup(jQuery, clicked_element, sk_facebook_feed) {
        if (typeof jQuery.magnificPopup === "undefined")
            initManificPopupPlugin(jQuery); var post_to_share = clicked_element.attr('post-to-share'); jQuery.magnificPopup.open({ items: { src: "<div style='width: 280px !important; padding: 30px; background-color: white !important;' class='white-popup'><h3 style='margin-top: 0px; text-align: center;'>Share this post</h3><div style='text-align: center;'><a class='fb-sharer-link fa fa-facebook-official' target='_blank' href='https://www.facebook.com/sharer/sharer.php?u=" + post_to_share + "'> Share on Facebook</a></div><div style='text-align: center;'><a target='_blank' href='https://twitter.com/share?url=" + post_to_share + "' class='twitter-sharer-link fa fa-twitter'> Share on Twitter</a></div></div>", type: 'inline' }, 'type': 'inline', callbacks: { open: function () { }, close: function () { } } });
    }
    function makeResponsive(jQuery, sk_youtube_channel_videos) {
        var sk_youtube_channel_videos_width = sk_youtube_channel_videos.width(); if (sk_youtube_channel_videos_width <= 320) { }
        else if (sk_youtube_channel_videos_width <= 481) { }
        else if (sk_youtube_channel_videos_width <= 641) { }
        else if (sk_youtube_channel_videos_width <= 961) { }
        else if (sk_youtube_channel_videos_width <= 1025) { }
        else if (sk_youtube_channel_videos_width <= 1281) { }
        else if (sk_youtube_channel_videos_width > 1281) { }
    }
    function getPaginationResult(sk_youtube_channel_videos, user_solutions, page, column_count) {
        var start = 0; var end = parseInt(column_count); var multiplicand = page - 1; var return_user_solutions = []; if (page != 1) { start = multiplicand * end; end = start + end; }
        if ((end - 1) > user_solutions.length) { end = user_solutions.length; }
        for (var i = start; i < end; i++) { return_user_solutions.push(user_solutions[i]); }
        return return_user_solutions;
    }
    function skSliderLayoutSettings(sk_youtube_channel_videos) {
        var autoplay = false; var loop = false; if (getDsmSetting(sk_youtube_channel_videos, "autoplay") == 1) { var delay = getDsmSetting(sk_youtube_channel_videos, "delay") * 1500; autoplay = { delay: delay }; loop = true; }
        var swiper = new Swiper('.sk-ww-youtube-channel-videos .swiper-layout-slider.swiper-container', { loop: loop, autoplay: autoplay, navigation: { nextEl: '.sk-ww-youtube-channel-videos .swiper-button-next', prevEl: '.sk-ww-youtube-channel-videos .swiper-button-prev', }, }); sk_youtube_channel_videos.find('.swiper-button-next').click({ swiper: swiper, sk_youtube_channel_videos: sk_youtube_channel_videos }, skLayoutSliderNextClickEvent);
    }
    function skLayoutSliderNextClickEvent(sk_youtube_channel_videos) { getYoutubeVideoIframe(jQuery(".swiper-slide-active").find(".sk-yt-playlist-iframe-container"), sk_youtube_channel_videos.data.sk_youtube_channel_videos); }
    function skLayoutSliderArrowUI(sk_youtube_channel_videos, display = "none") {
        var arrow_background_color = getDsmSetting(sk_youtube_channel_videos, "arrow_background_color"); var arrow_color = getDsmSetting(sk_youtube_channel_videos, "arrow_color"); var arrow_opacity = getDsmSetting(sk_youtube_channel_videos, "arrow_opacity"); sk_youtube_channel_videos.find(".sk_arrow").css({ "border": "solid " + arrow_color, "border-width": "0 3px 3px 0", "opacity": arrow_opacity, "color": arrow_color, "background-color": "transparent" }); jQuery(".swiper-button-next,.swiper-button-prev").mouseover(function () { jQuery(this).find(".sk_arrow").css({ "border": "solid " + arrow_background_color, "border-width": "0 3px 3px 0" }); jQuery(this).css({ "opacity": "1", "color": arrow_background_color }); }).mouseout(function () { jQuery(this).find(".sk_arrow").css({ "border": "solid " + arrow_color, "border-width": "0 3px 3px 0" }); jQuery(this).css({ "opacity": arrow_opacity }); }); jQuery(".swiper-button-next,.swiper-button-prev").css("display", 'block'); var feed_h = sk_youtube_channel_videos.find('.swiper-slide-active .sk-yt-all-posts').innerHeight(); if (!feed_h) { var feed_h = sk_youtube_channel_videos.find('.sk-yt-all-posts').innerHeight(); }
        var feed_h = sk_youtube_channel_videos.find('.sk-ww-youtube-channel-videos-item').height(); sk_youtube_channel_videos.find('.sk_youtube_channel_videos_slider').height(feed_h); sk_youtube_channel_videos.css("width", "100%"); var feed_h_2 = feed_h / 2; sk_youtube_channel_videos.find(".swiper-button-prev,.swiper-button-next").css({ "top": feed_h_2 + "px", "background-color": "transparent", "opacity": arrow_opacity, "color": arrow_background_color });
    } function sortVideosBy(data, sk_youtube_channel_videos) {
        var order_by = getDsmSetting(sk_youtube_channel_videos, 'order_by'); if (data) { data.sort(function (a, b) { return new Date(b.published_at) - new Date(a.published_at); }); }
        return data;
    }
    function moderationTabFeature(sk_vimeo_channel_videos, data) {
        var preapproved_posts = []; var excluded_posts = []; var turnon_preapproval_posts = getDsmSetting(sk_vimeo_channel_videos, "turnon_preapproval_posts"); if (turnon_preapproval_posts == 1) { if (getDsmSetting(sk_vimeo_channel_videos, "preapproved_posts") != "") { preapproved_posts = getDsmSetting(sk_vimeo_channel_videos, "preapproved_posts").split(","); } } else if (getDsmSetting(sk_vimeo_channel_videos, "excluded_posts") != "") { excluded_posts = getDsmSetting(sk_vimeo_channel_videos, "excluded_posts").split(","); }
        var new_posts_list = []; for (let item of data) {
            if (item) {
                if (turnon_preapproval_posts == 1) {
                    if (preapproved_posts.includes(item.id)) {
                        console.log(turnon_preapproval_posts, item.id)
                        new_posts_list.push(item);
                    }
                }
                else {
                    if (turnon_preapproval_posts == 0 && excluded_posts.includes(item.id)) { }
                    else { new_posts_list.push(item); }
                }
            }
        }; return new_posts_list;
    }
    function displayDuration(sk_youtube_channel_videos, video_id) { }
    function abbreviateNumber(count, withAbbr = false, decimals = 2) {
        const COUNT_ABBRS = ['', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y']; const i = 0 === count ? count : Math.floor(Math.log(count) / Math.log(1000)); let result = parseFloat((count / Math.pow(1000, i)).toFixed(decimals)); if (withAbbr) { result += `${COUNT_ABBRS[i]}`; }
        return result;
    }
    function getDateFormat(sk_youtube_channel_videos, date) {
        var today = new Date(date); var dd = today.getDate(); var mm = today.getMonth() + 1; var yyyy = today.getFullYear(); var date = dd + '/' + mm + '/' + yyyy; if (getDsmSetting(sk_youtube_channel_videos, 'translation') == "English - US") { date = mm + '/' + dd + '/' + yyyy; }
        return date;
    }
    function encodeHtmlSpecialCharacter(html) { if (html) { var el = document.createElement("div"); el.innerHTML = html; return el.firstChild.data; } }
    function characterLimit(text, limit) {
        if (text.length > limit && limit > 0) { text = text.substr(0, limit) + "..."; var el = document.createElement("div"); el.innerHTML = text; return el.firstChild.data; }
        else { return text; }
    }
    function numberFormatter(num) {
        num = num.replace(',', ''); num = num.replace(',', ''); if (num > 0) { return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(0)) + 'k' : Math.sign(num) * Math.abs(num); }
        else { return num; }
    }
    function removeZeroValue(num) { return num.replaceAll('.0', '') }
    function alignSpinner(jQuery, sk_youtube_channel_videos) { }
    function getDsmEmbedId(sk_youtube_channel_videos) {
        var embed_id = sk_youtube_channel_videos.attr('embed-id'); if (embed_id == undefined) { embed_id = sk_youtube_channel_videos.attr('data-embed-id'); }
        return embed_id;
    }
    function getDsmSetting(sk_youtube_channel_videos, key) { return sk_youtube_channel_videos.find("." + key).text(); }
    function loadYTScript(sk_youtube_channel_videos) {
        jQuery('iframe').filter(function () { return this.src.indexOf('https://www.youtube.com/') == 0 }).each(function (k, v) {
            if (!this.id) { this.id = 'embeddedvideoiframe' + k; }
            if (yt_ids.indexOf(this.id) != -1) { console.log("WARNING: Video exist, no need to initialize.") }
            else {
                yt_ids.push(this.id); var video_id = this.id; var player = new YT.Player(this.id, {
                    videoId: video_id, events: {
                        'onStateChange': function (event) {
                            console.log(YT.PlayerState.PLAYING, 'YT.PlayerState.PLAYING')
                            if (event.data == YT.PlayerState.PLAYING) { jQuery.each(yt_players, function (k, v) { if (this.getIframe().id != event.target.getIframe().id) { this.pauseVideo(); } }); }
                        }
                    }
                }); yt_players.push(player);
            }
        });
    }
    function stopAllIframeFromPlaying() { jQuery.each(yt_players, function (k, v) { this.pauseVideo(); }); }
    function replaceContentWithLinks(html, sk_youtube_channel_videos) {
        var text = html.html(); if (text) {
            text = text.replace(/(\r\n|\n\r|\r|\n)/g, "<br>"); text = text.split("<br>").join(" <br> "); var splitted_text = text.split(' '); if (splitted_text && splitted_text.length > 0) {
                jQuery.each(splitted_text, function (key, value) {
                    if (value.charAt(0) == "#") { var original_text = value.replace('#', ''); text = text.replace(' ' + value, ' <a target="_blank" href="https://youtube.com/hashtag/' + original_text + '">' + value + '</a>'); }
                    else if (value.charAt(0) == "@") { var original_text = value.replace('@', ''); text = text.replace(' ' + value, ' <a target="_blank" href="https://youtube.com/' + original_text + '">' + value + '</a>'); }
                }); var splitted_text = text.split(' '); jQuery.each(splitted_text, function (key, value) {
                    if (value.charAt(0) == "#" || value.charAt(1) == "#") { var original_text = value.replace('#', ''); original_text = original_text.replace('<br>', ''); text = text.replace(' ' + value, ' <a target="_blank" href="https//youtube.com/hashtag/' + original_text + '">' + value + '</a>'); }
                    else if (value.charAt(0) == "@") { var original_text = value.replace('@', ''); original_text = original_text.replace('<br>', ''); text = text.replace(' ' + value, ' <a target="_blank" href="https://youtube.com/' + original_text + '">' + value + '</a>'); }
                    else if (value.charAt(0) != "<" && (value.indexOf('http') != -1 || value.indexOf('www.') != -1) && value.indexOf('src=') == -1 && value.indexOf('href=') == -1 && value.indexOf('target=') == -1 && value.indexOf('">') == -1) { if (value.startsWith("www.")) { text = text.replace(' ' + value, ' <a target="_blank" href="https://' + value + '">' + value + '</a>'); } else { text = text.replace(' ' + value, ' <a target="_blank" href="' + value + '">' + value + '</a>'); } }
                    if (value.length == 9 && value.charAt(6) == ":") { value = value.replace('<br>', ''); }
                    if (value.length == 5 && value.charAt(2) == ":") { let seconds = getSeconds(value); let video_id = sk_youtube_channel_videos.context.dataset.videoId; text = text.replace(value, ' <a target="_blank" href="https://www.youtube.com/watch?v=' + video_id + '&t=' + seconds + 's">' + value + '</a>'); }
                    if (value.length == 4 && value.charAt(1) == ":") { let seconds = getSeconds(value); let video_id = sk_youtube_channel_videos.context.dataset.videoId; text = text.replace(value, ' <a target="_blank" href="https://www.youtube.com/watch?v=' + video_id + '&t=' + seconds + 's">' + value + '</a>'); }
                    if (value.length == 8 && value.charAt(5) == ":") { value = value.replace('<br>', ''); let seconds = getSeconds(value); let video_id = sk_youtube_channel_videos.context.dataset.videoId; text = text.replace(value, ' <a target="_blank" href="https://www.youtube.com/watch?v=' + video_id + '&t=' + seconds + 's">' + value + '</a>'); }
                });
            }
            html.html(text); applyPopUpColors(sk_youtube_channel_videos); if (html.hasClass('sk_pop_video_feed_video_description')) { html.find('a').css({ 'color': getDsmSetting(sk_youtube_channel_videos, "pop_up_link_color") }); }
            else { html.find('a').css({ 'color': getDsmSetting(sk_youtube_channel_videos, "details_link_color") }); }
        }
    }
    function getSeconds(time_str) { var a = time_str.split(':'); var seconds = 0 * 60 * 60 + (+a[0]) * 60 + (+a[1]); return seconds; }
    function replaceHttpToLink(content) { var exp_match = /(\b(https?|):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig; var element_content = content.replace(exp_match, '<a class="href_status_trigger hide-link" target="_blank" href="$1">$1</a>'); var new_exp_match = /(^|[^\/])(www\.[\S]+(\b|$))/gim; var new_content = element_content.replace(new_exp_match, '$1<a class="href_status_trigger hide-link" target="_blank" href="http://$2">$2</a>'); return new_content; }
    function getYoutubeVideoIframe(containers, sk_youtube_channel_videos) {
        for (var i = 0; i < containers.length; i++) { var ifr = jQuery(containers[i]).find('iframe'); if (ifr.length < 1) { var id = jQuery(containers[i]).attr("data-id"); jQuery(containers[i]).html("<iframe class='sk_inline_youtube_player' id='" + id + "' width='853' height='480' src='https://www.youtube.com/embed/" + id + "?showinfo=1&autoplay=0&enablejsapi=1' frameborder='0' allowfullscreen></iframe>"); } }
        applyCustomUi(jQuery, sk_youtube_channel_videos);
    }
    function applySearchFeature(data_storage, search_term) {
        var new_posts_lists = []; jQuery.each(data_storage, function (index, value) {
            if (value.title && value.title.toLowerCase().indexOf(search_term.toLowerCase()) != -1) { new_posts_lists.push(value); }
            else if (value.description && value.description.toLowerCase().indexOf(search_term.toLowerCase()) != -1) { new_posts_lists.push(value); }
        }); return new_posts_lists;
    }
    function replaceThumbIfNotExists() { $('.sk-ww-youtube-channel-videos-item-content').each(function (i, el) { var identifier = jQuery(el).attr('data-id'); var thumbnail_src = jQuery(el).attr('data-thumb'); var img = new Image(); img.src = thumbnail_src; img.onload = function () { var width = img.width; if (img.width < 121) { thumbnail_src = "https://img.youtube.com/vi/" + identifier + "/mqdefault.jpg"; document.getElementById(identifier).style.backgroundImage = "url('" + thumbnail_src + "')"; } }; }); }
    function loadGoogleFont(font_family) { var web_safe_fonts = ["Inherit", "Impact, Charcoal, sans-serif", "'Palatino Linotype', 'Book Antiqua', Palatino, serif", "Century Gothic, sans-serif", "'Lucida Sans Unicode', 'Lucida Grande', sans-serif", "Verdana, Geneva, sans-serif", "Copperplate, 'Copperplate Gothic Light', fantasy", "'Courier New', Courier, monospace", "Georgia, Serif"]; if (!web_safe_fonts.includes(font_family)) { loadCssFile("https://fonts.googleapis.com/css?family=" + font_family); } }
    function addDescriptiveTagAttributes(_sk, add_to_img = true) { _sk.find('a').each(function (i, v) { var title = jQuery(v).text(); jQuery(v).attr('title', title); }); if (add_to_img) { _sk.find('img').each(function (i, v) { var src = jQuery(v).attr('src'); jQuery(v).attr('alt', 'Post image'); }); } }
    function getClientId() { var _gaCookie = document.cookie.match(/(^|[;,]\s?)_ga=([^;,]*)/); if (_gaCookie) return _gaCookie[2].match(/\d+\.\d+$/)[0]; }
    function getSkEmbedId(sk_class) {
        var embed_id = sk_class.attr('embed-id'); if (embed_id == undefined) { embed_id = sk_class.attr('data-embed-id'); }
        return embed_id;
    }
    function getSkSetting(sk_class, key) { return sk_class.find("div." + key).text(); }
    function setCookieSameSite() { document.cookie = "AC-C=ac-c;expires=Fri, 31 Dec 2025 23:59:59 GMT;path=/;HttpOnly;SameSite=Lax"; }
    setCookieSameSite(); function getIEVersion() {
        var sAgent = window.navigator.userAgent; var Idx = sAgent.indexOf("MSIE"); if (Idx > 0)
            return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx))); else if (!!navigator.userAgent.match(/Trident\/7\./))
            return 11; else
            return 0;
    }
    function isSafariBrowser() { var ua = navigator.userAgent.toLowerCase(); if (ua.indexOf('safari') != -1) { if (ua.indexOf('chrome') > -1) { return 0; } else { return 1; } } }
    if (getIEVersion() > 0 || isSafariBrowser() > 0) { loadIEScript('https://cdn.jsdelivr.net/bluebird/3.5.0/bluebird.min.js'); loadIEScript('https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.3/fetch.js'); }
    function loadIEScript(url) { var scriptTag = document.createElement('script'); scriptTag.setAttribute("type", "text/javascript"); scriptTag.setAttribute("src", url); (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(scriptTag); }
    function kFormatter(num) { return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num) }
    function sk_increaseView(user_info) {
        try {
            if (!user_info)
                return; jQuery.getJSON('https://api.ipify.org?format=json', function (data) {
                    jQuery.getJSON('https://api.ipify.org?format=json', function (data) {
                        var update_views_url = "https://views.accentapi.com/add_view.php?user_id=" + user_info.id + "&url=" + document.URL + "&ip_address=" + data.ip + "&embed_id=" + user_info.embed_id; if (app_url.includes("local") && sk_app_url) { update_views_url = "https://localtesting.com/accentapiviews/add_view.php?user_id=" + user_info.id + "&url=" + document.URL + "&ip_address=" + data.ip + "&embed_id=" + user_info.embed_id; }
                        jQuery.ajax(update_views_url);
                    });
                });
        }
        catch (err) { console.log("Error retrieving ip address."); }
    }
    function isTooDarkColor(hexcolor) {
        var r = parseInt(hexcolor.substr(1, 2), 16); var g = parseInt(hexcolor.substr(3, 2), 16); var b = parseInt(hexcolor.substr(4, 2), 16); if (hexcolor.indexOf('rgb') != -1) { let rgbstr = hexcolor; let v = getRGB(rgbstr); r = v[0]; g = v[1]; b = v[2]; }
        b = isNaN(b) ? 0 : b; var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000; if (yiq < 60) { }
        else { }
        return yiq < 60 ? true : false;
    }
    function linkify(html) { var temp_text = html.split("https://www.").join("https://"); temp_text = temp_text.split("www.").join("https://www."); var exp = /((href|src)=["']|)(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig; return temp_text.replace(exp, function () { return arguments[1] ? arguments[0] : "<a href=\"" + arguments[3] + "\">" + arguments[3] + "</a>" }); }
    function skGetEnvironmentUrls(folder_name) {
        var scripts = document.getElementsByTagName("script"); var scripts_length = scripts.length; var search_result = -1; var other_result = -1; var app_url = "https://widgets.sociablekit.com/"; var app_backend_url = "https://api.accentapi.com/v1/"; var app_file_server_url = "https://data.accentapi.com/feed/"; var sk_app_url = "https://sociablekit.com/app/"; var sk_api_url = "https://api.sociablekit.com/"; var sk_img_url = "https://images.sociablekit.com/"; for (var i = 0; i < scripts_length; i++) {
            var src_str = scripts[i].getAttribute('src'); if (src_str != null) {
                var other_folder = ""; if (folder_name == 'facebook-page-playlist') { other_folder = 'facebook-page-playlists'; }
                else if (folder_name == 'linkedin-page-posts') { other_folder = 'linkedin-page-post'; }
                else if (folder_name == 'linkedin-profile-posts') { other_folder = 'linkedin-profile-post'; }
                else if (folder_name == 'facebook-hashtag-posts') { other_folder = 'facebook-hashtag-feed'; }
                else if (folder_name == 'facebook-page-events') { other_folder = 'facebook-events'; }
                else if (folder_name == 'facebook-page-posts') { other_folder = 'facebook-feed'; if (document.querySelector(".sk-ww-facebook-feed")) { var element = document.getElementsByClassName("sk-ww-facebook-feed")[0]; element.classList.add("sk-ww-facebook-page-posts"); } }
                other_result = src_str.search(other_folder); search_result = src_str.search(folder_name); if (search_result >= 1 || other_result >= 1) {
                    var src_arr = src_str.split(folder_name); app_url = src_arr[0]; app_url = app_url.replace("displaysocialmedia.com", "sociablekit.com"); if (app_url.search("local") >= 1) { app_backend_url = "http://localhost:3000/v1/"; app_url = "https://localtesting.com/SociableKIT_Widgets/"; app_file_server_url = "https://localtesting.com/SociableKIT_FileServer/feed/"; sk_app_url = "https://localtesting.com/SociableKIT/"; sk_api_url = "http://127.0.0.1:8000/"; sk_img_url = "https://localtesting.com/SociableKIT_Images/"; }
                    else { app_url = "https://widgets.sociablekit.com/"; }
                }
            }
        }
        return { "app_url": app_url, "app_backend_url": app_backend_url, "app_file_server_url": app_file_server_url, "sk_api_url": sk_api_url, "sk_app_url": sk_app_url, "sk_img_url": sk_img_url };
    }
    function changeBackSlashToBR(text) {
        if (text) { for (var i = 1; i <= 10; i++) { text = text.replace('\n', '</br>'); } }
        return text;
    }
    function sKGetScrollbarWidth() { var outer = document.createElement('div'); outer.style.visibility = 'hidden'; outer.style.overflow = 'scroll'; outer.style.msOverflowStyle = 'scrollbar'; document.body.appendChild(outer); var inner = document.createElement('div'); outer.appendChild(inner); var scrollbarWidth = (outer.offsetWidth - inner.offsetWidth); outer.parentNode.removeChild(outer); return scrollbarWidth; }
    function isValidURL(url) { const urlPattern = /^(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/; return urlPattern.test(url); }
    async function showUrlData(element, url, post_id, type = "", show_thumbnail = 1) {
        element.hide(); var free_data_url = app_file_server_url.replace("feed/", "get_fresh_url_tags.php") + '?post_id=' + post_id + '&url=' + url; var read_one_url = app_file_server_url.replace("feed", "url-tags") + post_id + ".json"; if (jQuery('.sk_version').text()) { read_one_url += "?v=" + jQuery('.sk_version').text(); }
        fetch(read_one_url, { method: 'get' }).then(async response => {
            if (response.ok) {
                let data = await response.json(); if (data && data.status && data.status == 418) { displayUrlData(data, element, type, show_thumbnail, post_id); data = await jQuery.ajax(free_data_url); }
                return data;
            }
            else { response = await jQuery.ajax(free_data_url); displayUrlData(response, element, type, show_thumbnail, post_id); return response; }
        }).then(async response => { if (response != undefined) { displayUrlData(response, element, type, show_thumbnail, post_id); } else { response = await jQuery.ajax(free_data_url); displayUrlData(response, element, type, show_thumbnail, post_id); } }).catch(async error => { var data = await jQuery.ajax(free_data_url); displayUrlData(data, element, type, show_thumbnail, post_id); });
    }
    async function displayUrlData(response, element, type, show_thumbnail = 1, post_id) {
        var meta_holder = jQuery(element); var html = ""; if (!response || response.error) {
            if (meta_holder.html()) { meta_holder.show(); }
            return;
        }
        if (response.message && response.message == "Data not available. Please try again.") { return; }
        if (response.messages && response.messages.length > 0 && response.messages[0] == "PDF files that are over 10Mb are not supported by Google Docs Viewer") {
            var data = response.url; if (response.url) { data = response.url.replace("https://", "").split("/"); }
            if (data.length > 0) {
                if (data.length > 1) { response.title = data[data.length - 1]; }
                response.description = data[0].replace("www.", "");
            }
        }
        if (post_id == "7059257055500492800") { response.url += "?id=122630"; }
        html += "<a href='" + response.url + "' link-only target='_blank'>"; html += "<div class='sk-link-article-container' style='background: #eeeeee;color: black !important; font-weight: bold !important; border-radius: 2px; border: 1px solid #c3c3c3; box-sizing: border-box; word-wrap: break-word;'>"; if (show_thumbnail == 1) { html += "<image alt='No alternative text description for this image' class='sk-link-article-image sk_post_img_link' onerror='this.style.display=\"none\"' src='" + response.thumbnail_url + "'/>"; }
        if (response.title) { html += "<div class='sk-link-article-title' style='padding: 8px;'>" + response.title + "</div>"; }
        else if (response.url && response.url.indexOf(".pdf") != -1) { html += response.html; }
        if (type && type == 6) { if (response.description && response.description.length > 0) { response.description = response.description.length > 140 ? response.description.substring(0, 140) + ' ...' : response.description; } }
        if (response.description && response.description.indexOf("[vc_row]") !== -1 && response.url) { var pathArray = response.url.split('/'); var protocol = pathArray[0]; if (pathArray.length > 2) { var host = pathArray[2]; var url = protocol + '//' + host; html += "<div class='sk-link-article-description' style='padding: 8px;color: grey;font-weight: 100;font-size: 14px;'>" + url + "</div>"; } }
        else if (response.description && response.description.indexOf("fb_built") == -1 && response.description != "null") {
            if (response.url) { var domain = new URL(response.url).hostname; response.description = domain; }
            html += "<div class='sk-link-article-description' style='padding: 8px;color: #000000;font-weight: 100;font-size: 14px;'>" + response.description + "</div>";
        }
        else if (response.url && response.url.includes('instagram.com/p/')) { html += "<image style='padding: 8px;' alt='No alternative text description for this image' class='sk-ig-default' onerror='this.style.display=\"none\"' src='https://i1.wp.com/sociablekit.com/wp-content/uploads/2019/01/instagram.png'/>"; html += "<div class='sk-link-article-description' style='padding: 8px;margin-left:15%;color: #000000;font-weight: 600;font-size: 14px;'>View this post in instagram</div>"; html += "<div class='sk-link-article-description' style='padding: 0px 8px ;margin-left:15%;margin-bottom:10px;color: #000000;font-weight: 100;font-size: 10px;'>" + response.url + "</div>"; }
        html += "</div>"; html += "</a>"; meta_holder.html(html); meta_holder.css('display', 'block'); meta_holder.css('margin-bottom', '15px'); meta_holder.find('.sk-ig-default').closest('.sk-link-article-container').css('display', 'inline-block'); meta_holder.find('.sk-ig-default').closest('.sk-link-article-container').css('width', '100%'); meta_holder.find('.sk-ig-default').css('width', '20%'); meta_holder.find('.sk-ig-default').css('float', 'left'); applyMasonry();
    }
    function slugifyString(str) {
        str = str.replace(/^\s+|\s+$/g, ''); str = str.toLowerCase(); var from = "ÃÃ„Ã‚Ã€ÃƒÃ…ÄŒÃ‡Ä†ÄŽÃ‰ÄšÃ‹ÃˆÃŠáº¼Ä”È†ÃÃŒÃŽÃÅ‡Ã‘Ã“Ã–Ã’Ã”Ã•Ã˜Å˜Å”Å Å¤ÃšÅ®ÃœÃ™Ã›ÃÅ¸Å½Ã¡Ã¤Ã¢Ã Ã£Ã¥ÄÃ§Ä‡ÄÃ©Ä›Ã«Ã¨Ãªáº½Ä•È‡Ã­Ã¬Ã®Ã¯ÅˆÃ±Ã³Ã¶Ã²Ã´ÃµÃ¸Ã°Å™Å•Å¡Å¥ÃºÅ¯Ã¼Ã¹Ã»Ã½Ã¿Å¾Ã¾ÃžÄÄ‘ÃŸÃ†aÂ·/_,:;"; var to = "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------"; for (var i = 0, l = from.length; i < l; i++) { str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i)); }
        str = str.replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-'); return str;
    }
    function skGetBranding(sk_, user_info) {
        sk_.find('.sk_branding').remove(); sk_.find('div.user_email').remove(); var html = ""; if (!user_info)
            return; var slugify_string = ""; if (user_info.solution_name) { slugify_string = slugifyString(user_info.solution_name); user_info.tutorial_link = "https://www.sociablekit.com/tutorials/embed-" + slugify_string + "-website/"; if (user_info.website_builder) { user_info.tutorial_link = "https://www.sociablekit.com/tutorials/embed-" + slugify_string; slugify_string = slugifyString(user_info.website_builder); user_info.tutorial_link = user_info.tutorial_link + "-" + slugify_string; } }
        if (user_info.type == 9) { user_info.tutorial_link = "https://www.sociablekit.com/sync-facebook-page-events-to-google-calendar/"; }
        else if (user_info.type == 26) { user_info.tutorial_link = "https://www.sociablekit.com/how-to-sync-facebook-group-events-to-google-calendar-on-website/"; }
        if (user_info.show_branding && (user_info.show_branding == 1 || user_info.show_branding == "true") || user_info.show_branding == true) {
            var fontFamily = getSkSetting(sk_, "font_family"); var link_color = getSkSetting(sk_, "details_link_color"); var details_bg_color = getSkSetting(sk_, "details_bg_color"); if (link_color == "") { link_color = "rgb(52, 128, 220)"; }
            if (details_bg_color && isTooDarkColor(link_color) == false && isTooDarkColor(details_bg_color) == false) { link_color = '#3480dc'; }
            var temporary_tutorial_link = user_info.tutorial_link; if (temporary_tutorial_link.endsWith("/") == false) { temporary_tutorial_link = temporary_tutorial_link + "/"; }
            var linkedin_widgets = [33, 34, 44, 58, 75, 99, 100, 103]; if (linkedin_widgets.includes(user_info.type) && user_info.embed_id % 2 == 1) {
                var website_builder = "website"; if (user_info.website_builder) { website_builder = slugifyString(user_info.website_builder); }
                temporary_tutorial_link = "https://www.sociablekit.com/tutorials/embed-linkedin-feed-" + website_builder + "/";
            }
            if (user_info.type == 5 && user_info.embed_id % 2 == 1) { temporary_tutorial_link = temporary_tutorial_link.replace("profile", "feed") }
            var facebook_feed = [1, 4, 9, 10, 11, 36, 38, 43, 12, 24, 26, 49, 2, 8, 3, 18, 19, 28, 30, 61]; if (facebook_feed.includes(user_info.type) && user_info.embed_id % 2 == 1) {
                var website_builder = "website"; if (user_info.website_builder) { website_builder = slugifyString(user_info.website_builder); }
                temporary_tutorial_link = "https://www.sociablekit.com/tutorials/embed-facebook-feed-" + website_builder + "/";
            }
            var threads_feed = [110]; if (threads_feed.includes(user_info.type) && user_info.embed_id % 2 == 0) {
                var website_builder = "website"; if (user_info.website_builder) { website_builder = slugifyString(user_info.website_builder); }
                temporary_tutorial_link = "https://www.sociablekit.com/tutorials/embed-threads-" + website_builder + "/";
            }
            var nofollow_attribute = ""; if (window.location.href.includes("clean-concept-plus")) { nofollow_attribute = "rel='nofollow'"; }
            html += "<div class='sk_branding' style='padding:10px; display:block !important; text-align:center; text-decoration: none !important; color:#555; font-family:" + fontFamily + "; font-size:15px;'>"; html += "<a " + nofollow_attribute + " class='tutorial_link' href='" + temporary_tutorial_link + "' target='_blank' style='text-underline-position:under; color:" + link_color + ";font-size:15px;'>"; if (linkedin_widgets.includes(user_info.type) && user_info.embed_id % 2 == 1) { html += "Embed LinkedIn Feed on your "; if (user_info.website_builder && user_info.website_builder != "Website") { html += user_info.website_builder; } } else if (facebook_feed.includes(user_info.type) && user_info.embed_id % 2 == 1) { html += "Embed Facebook Feed on your "; if (user_info.website_builder && user_info.website_builder != "Website") { html += user_info.website_builder; } } else { html += "Embed " + user_info.solution_name + " on your "; if (user_info.website_builder && user_info.website_builder != "Website") { html += user_info.website_builder; } }
            html += " website"; html += "</a>"; html += "</div>";
        }
        return html;
    }
    function getRGB(rgbstr) { return rgbstr.substring(4, rgbstr.length - 1).replace(/ /g, '').replace('(', '').split(','); }
    function freeTrialEndedMessage(solution_info) { var sk_error_message = "<div class='sk_trial_ended_message'>"; sk_error_message += "Customized feed is powered by <strong><a href='https://www.sociablekit.com/' target='_blank'>SociableKIT</a></strong>.<br>"; sk_error_message += "If you're the owner of this website, your 7-day Free Trial has ended.<br>"; sk_error_message += "If you want to continue using our services, please <strong><a target='_blank' href='https://www.sociablekit.com/app/users/subscription/subscription'>subscribe now</a></strong>."; sk_error_message += "</div>"; return sk_error_message; }
    function isFreeTrialEnded(start_date) { var start_date = new Date(start_date); var current_date = new Date(); var difference = current_date.getTime() - start_date.getTime(); difference = parseInt(difference / (1000 * 60 * 60 * 24)); return difference > 7 ? true : false; }
    function unableToLoadSKErrorMessage(solution_info, additional_error_messages) {
        var sk_error_message = "<ul class='sk_error_message'>"; sk_error_message += "<li><a href='" + solution_info.tutorial_link + "' target='_blank'>Customized " + solution_info.solution_name + " feed by SociableKIT</a></li>"; sk_error_message += "<li>Unable to load " + solution_info.solution_name + ".</li>"; for (var i = 0; i < additional_error_messages.length; i++) { sk_error_message += additional_error_messages[i]; }
        sk_error_message += "<li>If you think there is a problem, <a target='_blank' href='https://go.crisp.chat/chat/embed/?website_id=2e3a484e-b418-4643-8dd2-2355d8eddc6b'>chat with support here</a>. We will solve it for you.</li>"; sk_error_message += "</ul>"; return sk_error_message;
    }
    function widgetValidation(_sk, data) {
        if (data.user_info) {
            var user_info = data.user_info; user_info.trial_ended = false; if (user_info.status == 6 && user_info.start_date) { var start_date = new Date(user_info.start_date).getTime(); var current_date = new Date().getTime(); var difference = current_date - start_date; difference = parseInt(difference / (1000 * 60 * 60 * 24)); user_info.show_feed = difference > 7 ? false : true; user_info.trial_ended = difference > 7 ? true : false; }
            else if (user_info.status == 7 && user_info.cancellation_date) { var cancellation_date = new Date(user_info.cancellation_date).setHours(0, 0, 0, 0); var current_date = new Date().setHours(0, 0, 0, 0); user_info.show_feed = current_date > cancellation_date ? false : true; var activation_date = new Date(user_info.activation_date).setHours(0, 0, 0, 0); if (activation_date > cancellation_date) { user_info.show_feed = true; } }
            else if (user_info.status == 0 || user_info.status == 2 || user_info.status == 10) { user_info.show_feed = false; }
            if (!user_info.show_feed) { var sk_error_message = generateBlueMessage(_sk, user_info); _sk.find(".first_loading_animation").hide(); _sk.html(sk_error_message); }
            return user_info.show_feed;
        }
    }
    function generateBlueMessage(_sk, user_info) {
        var tutorial_link = ""; if (user_info.solution_name) { var slugify_string = slugifyString(user_info.solution_name); tutorial_link = "https://www.sociablekit.com/tutorials/embed-" + slugify_string + "-website/"; }
        if (user_info.type == 9) { tutorial_link = "https://www.sociablekit.com/sync-facebook-page-events-to-google-calendar/"; }
        else if (user_info.type == 26) { tutorial_link = "https://www.sociablekit.com/how-to-sync-facebook-group-events-to-google-calendar-on-website/"; }
        var sk_error_message = ""; if (user_info.show_feed == false) {
            if (!user_info.message || user_info.message == "") { var sk_error_message = "<ul class='sk_error_message'>"; sk_error_message += "<li><a href='" + tutorial_link + "' target='_blank'>" + user_info.solution_name + " powered by SociableKIT</a></li>"; sk_error_message += "<li>If youâ€™re the owner of this website or SociableKIT account used, we found some errors with your account.</li>"; sk_error_message += "<li>Please login your SociableKIT account to fix it.</li>"; sk_error_message += "</ul>"; user_info.message = sk_error_message; }
            sk_error_message = user_info.message;
        }
        else if (user_info.solution_name == null && user_info.type == null && user_info.start_date == null) { sk_error_message = "<p class='sk_error_message'>"; sk_error_message += "The SociableKIT solution does not exist. If you think this is a mistake, please contact support."; sk_error_message += "</p>"; }
        else if (user_info.to_encode == 1 && user_info.encoded == false) {
            var learn_more_element = "<a style='color:#fff;' href='https://help.sociablekit.com/en-us/article/why-is-my-feed-not-working-19cw6zw/' target='_blank'><u>Learn more</u></a>."
            var styles = "style='background-color: #1972f5; text-align: center !important; margin-top: 50px; font-family: Arial, Helvetica, sans-serif; font-size: 16px; line-height: 30px; padding: 20px 45px; border-radius: 3px; color: white !important;'"; sk_error_message = "<div " + styles + ">"; sk_error_message += "<div style='width: auto; display: inline-block;'><i class='fa fa-spinner fa-pulse'></i></div> <div style='width: auto; display: inline-block;'>Your " + user_info.solution_name + " will appear soon. Please check back later! " + learn_more_element + "</div>"; sk_error_message += "</div>";
        }
        else {
            sk_error_message = "<div class='sk_error_message'>"; sk_error_message += "<div style='display: inline-flex;width:100%;'>"; sk_error_message += "<div>"; sk_error_message += "<ul>"; sk_error_message += "<li><a href='" + tutorial_link + "' target='_blank'>Customized " + user_info.solution_name + " feed by SociableKIT</a></li>"; sk_error_message += "<li>Our system is syncing with your " + user_info.solution_name + " feed, please check back later.</li>"; if (user_info.type == 5) { var username = getDsmSetting(_sk, 'username'); sk_error_message += "<li>Make sure your instagram account <a target='_blank' href='https://www.instagram.com/" + username + "' target='_blank'><b>@" + username + "</b></a> is connected.</li>"; }
            sk_error_message += "<li>It usually takes only a few minutes, but might take up to 24 hours. We appreciate your patience.</li>"; sk_error_message += "<li>We will notify you via email once your " + user_info.solution_name + " feed is ready.</li>"; sk_error_message += "<li>If you think there is a problem, <a target='_blank' href='https://go.crisp.chat/chat/embed/?website_id=2e3a484e-b418-4643-8dd2-2355d8eddc6b'>chat with support here</a>. We will solve it for you.</li>"; sk_error_message += "</ul>"; sk_error_message += "</div>"; sk_error_message += "</div>"; sk_error_message += "</div>";
        }
        return sk_error_message;
    }
    function generateSolutionMessage(_sk, embed_id) {
        var json_url = sk_api_url + "api/user_embed/info/" + embed_id; var sk_error_message = ""; jQuery.getJSON(json_url, function (data) {
            if (data.type == 1 && data.encoded == true) { loadEvents(_sk); }
            else if (data.type == 44 && data.encoded == true) { loadFeed(_sk); }
            else if (data.type == 58 && data.encoded == true) { var no_data_text = _sk.find('.no_data_text').text(); _sk.html("<div style='padding: 20px;text-align: center;'>" + no_data_text + "</div>"); }
            else if (data.type == 67 && data.encoded == true) { loadEvents(_sk); }
            else if (data.type == 74 && data.encoded == true) { _sk.html("<div>No jobs yet, please try again later.</div>"); }
            else { var sk_error_message = generateBlueMessage(_sk, data); _sk.find(".first_loading_animation").hide(); _sk.html(sk_error_message); }
        }).fail(function (e) { console.log(e); });
    }
    function copyInput(copy_button, copy_input) {
        var copy_button_orig_html = copy_button.html(); copy_input.select(); try {
            var successful = document.execCommand('copy'); var msg = successful ? 'successful' : 'unsuccessful'; if (msg == 'successful') { copy_button.html("<i class='fa fa-clipboard'></i> Copied!"); setTimeout(function () { copy_button.html(copy_button_orig_html); }, 3000); }
            else { alert('Copying text command was ' + msg + '.'); }
        }
            catch (err) { alert('Oops, unable to copy.'); }
    }
    function getDefaultLinkedInPageProfilePicture(profile_picture) {
        if (profile_picture && profile_picture.indexOf("data:image/gif") != -1) { profile_picture = "https://gmalcilk.sirv.com/iamge.JPG"; }
        return profile_picture;
    }
    function detectedSKDashboard() {
        let parent_url = (window.location != window.parent.location) ? document.referrer : document.location.href; if (parent_url && (parent_url.indexOf("sociablekit.com") != -1 || parent_url.indexOf("local") != -1)) { return true; }
        return false;
    }
    function getSKDashboardPremiumTrialMessage() { var sk_error_message = ""; sk_error_message += "<ul class='sk_error_message'>"; sk_error_message += "<li>Your 7-days premium trial has ended.</li>"; sk_error_message += "<li>Please purchase a <a href='https://www.sociablekit.com/app/users/subscription/subscription?action=subscribe_now'>SociableKIT subscription plan</a> "; sk_error_message += "to save your widget customizations, save time with automatic sync, enjoy priority support, and get a 50% discount on any annual plans. Donâ€™t miss out!</li>"; sk_error_message += "<li>You may also choose to <a href='https://help.sociablekit.com/en-us/article/how-to-activate-the-free-plan-1l3o0nt/'>activate the free plan</a> if you don't need our premium features.</li>"; sk_error_message += "</ul>"; return sk_error_message; }
    function getSocialIcon(category) {
        var post_items = ''; if (category.indexOf("Facebook") != -1) { post_items += "<i class='fab fa-facebook' aria-hidden='true'></i>"; }
        else if (category.indexOf("Instagram") != -1) { post_items += "<i class='fab fa-instagram' aria-hidden='true'></i>"; }
        else if (category.indexOf("Linkedin") != -1) { post_items += "<i class='fab fa-linkedin' aria-hidden='true'></i>"; }
        else if (category.indexOf("Youtube") != -1) { post_items += "<i class='fab fa-youtube' aria-hidden='true'></i>"; }
        else if (category.indexOf("Google") != -1) { post_items += "<i class='fab fa-google' aria-hidden='true'></i>"; }
        else if (category.indexOf("Twitter") != -1) { post_items += '<i class="fa-brands fa-x-twitter"></i>'; }
        else if (category.indexOf("Twitch") != -1) { post_items += "<i class='fab fa-twitch' aria-hidden='true'></i>"; }
        else if (category.indexOf("Yelp") != -1) { post_items += "<i class='fab fa-yelp' aria-hidden='true'></i>"; }
        else if (category.indexOf("Vimeo") != -1) { post_items += "<i class='fab fa-vimeo' aria-hidden='true'></i>"; }
        else if (category.indexOf("Twitch") != -1) { post_items += "<i class='fab fa-twitch' aria-hidden='true'></i>"; }
        else if (category.indexOf("Trust") != -1) { post_items += "<i class='fab fa-trustpilot' aria-hidden='true'></i>"; }
        else if (category.indexOf("Spot") != -1) { post_items += "<i class='fab fa-spotify' aria-hidden='true'></i>"; }
        return post_items;
    }
    function isFontAwesomeLoaded() {
        var span = document.createElement('span'); span.className = 'fa'; span.style.display = 'none'; document.body.insertBefore(span, document.body.firstChild); var font = css(span, 'font-family'); if (font.indexOf("fontawesome") == -1) { return false; }
        document.body.removeChild(span); return true;
    }
    function css(element, property) {
        let font = window.getComputedStyle(element, null).getPropertyValue(property); if (font) { font = font.toLowerCase(); return font.replace(/' '/g, ""); }
        return 'na';
    }
    var chosen_video = true; function main() {
        console.log("main"); function loadSettingsData(sk_youtube_channel_videos, json_settings_url, json_feed_url) {
            fetch(json_feed_url, { method: 'get' }).then(function (response) {
                if (!response.ok) {
                    loadSettingsData(sk_youtube_channel_videos, json_settings_url, json_settings_url)
                    return;
                }
                response.json().then(function (data) {
                    var settings_data = data; original_data = data; if (data.settings) { settings_data = data.settings; settings_data.type = 15; }
                    if (data.css) { jQuery('head').prepend('<style type="text/css">' + data.css + '</style>'); } else { loadCssFile(app_url + "youtube-channel-videos/widget_css.php"); }
                    if (!settings_data.type) {
                        loadSettingsData(sk_youtube_channel_videos, json_settings_url, json_settings_url)
                        return;
                    }
                    settings_data.type = 15; var web_safe_fonts = ["Inherit", "Impact, Charcoal, sans-serif", "'Palatino Linotype', 'Book Antiqua', Palatino, serif", "Century Gothic, sans-serif", "'Lucida Sans Unicode', 'Lucida Grande', sans-serif", "Verdana, Geneva, sans-serif", "Copperplate, 'Copperplate Gothic Light', fantasy", "'Courier New', Courier, monospace", "Georgia, Serif"]; var is_font_included = web_safe_fonts.indexOf(settings_data.font_family); if (is_font_included < 0) { loadCssFile("https://fonts.googleapis.com/css?family=" + settings_data.font_family); }
                    if (original_data.user_info && !widgetValidation(sk_youtube_channel_videos, original_data)) { sk_youtube_channel_videos.find('.loading-img').hide(); sk_youtube_channel_videos.find('.first_loading_animation').hide(); return; }
                    else {
                        var html = "<div class='share-modal-wrapper'>"; html += "<div class='share-modal'>"; html += "<div class='share-popup-close'></div>"; html += "<div class='share-modal-content'>"; html += ""; html += "</div>"; html += "</div>"; html += "</div>"; if (jQuery('.share-modal-wrapper').length == 0) { jQuery('body').prepend(html); }
                        var settings_html = ""; settings_html += "<div style='display:none;' class='display-none sk-settings'>"; settings_html += "<div class='sk_youtube_channel_white_pop_up sk_pop_up_content sk-pop-yt-post'></div>"; jQuery.each(settings_data, function (key, value) { settings_html += "<div class='" + key + "'>" + value + "</div>"; }); settings_html += "</div>"; if (sk_youtube_channel_videos.find('.sk-settings').length) { }
                        else { sk_youtube_channel_videos.prepend(settings_html); }
                        if (getDsmSetting(sk_youtube_channel_videos, 'layout') == 3) { loadCssFile(app_url + "libs/swiper/swiper.min.css"); loadCssFile(app_url + "libs/swiper/swiper.css?v=ranndomchars"); }
                        if (getDsmSetting(sk_youtube_channel_videos, 'show_pop_up') == 1) { loadScript("https://www.youtube.com/player_api"); }
                        settings_html = ""; if (data.settings) { loadFeed(sk_youtube_channel_videos); }
                        else { requestFeedData(sk_youtube_channel_videos) }
                    }
                });
            }).catch(function (err) { loadSettingsData(sk_youtube_channel_videos, json_settings_url, json_settings_url); });
        }
        jQuery(document).ready(function ($) {
            jQuery('.sk-ww-youtube-channel-videos').each(function () { var sk_youtube_channel_videos = jQuery(this); var embed_id = getDsmEmbedId(sk_youtube_channel_videos); var json_settings_url = app_file_server_url.replace('feed/', '') + "settings/" + embed_id + "/settings.json?nocache=" + (new Date()).getTime(); var json_feed_url = app_file_server_url + embed_id + ".json?nocache=" + (new Date()).getTime(); loadSettingsData(sk_youtube_channel_videos, json_settings_url, json_feed_url); }); jQuery(window).resize(function () { jQuery('.sk-ww-youtube-channel-videos').each(function () { var sk_youtube_channel_videos = jQuery(this); applyCustomUi(jQuery, sk_youtube_channel_videos); }); }); jQuery(document).on('submit', '.sk-ww-youtube-channel-videos .sk_ww_search_youtube_channel_videos_form', function (e) { e.preventDefault(); var sk_ww_search_youtube_channel_videos = jQuery(this).find(".sk_ww_search_youtube_channel_videos"); var sk_youtube_channel_videos = jQuery(this).closest('.sk-ww-youtube-channel-videos'); loadFeed(sk_youtube_channel_videos); return false; }); jQuery(document).on('keyup', '.sk-ww-youtube-channel-videos .sk_ww_search_youtube_channel_videos_form', function () {
                var search_term = jQuery(this).find(".sk_ww_search_youtube_channel_videos").val(); if (search_term) { jQuery('.sk_ww_search_icon').removeClass('fa-search'); jQuery('.sk_ww_search_icon').addClass('fa-times'); }
                else { jQuery('.sk_ww_search_icon').removeClass('fa-times'); jQuery('.sk_ww_search_icon').addClass('fa-search'); }
                return false;
            }); jQuery(document).on('change', '.sk-ww-youtube-channel-videos .sk_ww_search_youtube_channel_videos_form', function () { var sk_ww_search_youtube_channel_videos = jQuery(this).find(".sk_ww_search_youtube_channel_videos"); var sk_youtube_channel_videos = jQuery(this).closest('.sk-ww-youtube-channel-videos'); loadFeed(sk_youtube_channel_videos); return false; }); jQuery(document).on('click', '.sk_ww_search_icon', function () {
                var sk_youtube_channel_videos = jQuery(this).closest('.sk-ww-youtube-channel-videos'); if (jQuery(this).hasClass('fa-times')) { jQuery(this).closest('form').find(".sk_ww_search_youtube_channel_videos").val(''); jQuery('.sk_ww_search_icon').removeClass('fa-times'); jQuery('.sk_ww_search_icon').addClass('fa-search'); }
                var search_term = jQuery(this).find(".sk_ww_search_youtube_channel_videos").val(); if (search_term) { jQuery('.sk_ww_search_icon').removeClass('fa-search'); jQuery('.sk_ww_search_icon').addClass('fa-times'); }
                else { jQuery('.sk_ww_search_icon').removeClass('fa-times'); jQuery('.sk_ww_search_icon').addClass('fa-search'); }
                loadFeed(sk_youtube_channel_videos);
            }); var chosen_element = 0; jQuery(document).on('click', '.sk-ww-youtube-channel-videos .sk-yt-post-hover', function () { var clicked_element = jQuery(this); showDsmYouTubeVideo(clicked_element); }); jQuery(document).on('click', '.sk-ww-youtube-channel-videos .sk-ww-yt-video-info', function () { var clicked_element = jQuery(this); chosen_element = showDsmYouTubeVideo(clicked_element); chosen_video = true; }); jQuery(document).on('click', '.next_sk_yt_channel_post', function () { var clicked_element = jQuery('.sk-ww-youtube-channel-videos .sk-ww-yt-video-info')[chosen_element + 1]; chosen_element = showDsmYouTubeVideo(jQuery(clicked_element)); chosen_video = false; }); jQuery(document).on('click', '.prev_sk_yt_channel_post', function () { var clicked_element = jQuery('.sk-ww-youtube-channel-videos .sk-ww-yt-video-info')[chosen_element - 1]; chosen_element = showDsmYouTubeVideo(jQuery(clicked_element)); chosen_video = false; }); jQuery(document).on('click', '.sk-tooltip', function () {
                var tooltip = jQuery(this).find('.sk-tooltiptext'); if (tooltip.css('visibility') == 'hidden') { jQuery('.sk-tooltiptext').css('visibility', 'hidden'); tooltip.css({ 'visibility': 'visible' }); }
                else { jQuery('.sk-tooltiptext').css('visibility', 'hidden'); }
            }); jQuery(document).on('click', '.sk-ww-youtube-channel-videos .sk-yt-load-more-posts', function () {
                if (jQuery(this).attr('disabled') == "disabled") { return false; }
                jQuery(this).attr('disabled', 'disabled'); var current_btn = jQuery(this); var current_btn_text = current_btn.text(); var sk_youtube_channel_videos = jQuery(this).closest('.sk-ww-youtube-channel-videos')
                var next_page = sk_youtube_channel_videos.find('.sk-yt-next-page').text(); var json_url = next_page; var end_of_posts_text = sk_youtube_channel_videos.find('.end_of_posts_text').text(); var view_on_youtube_text = sk_youtube_channel_videos.find('.view_on_youtube_text').text(); jQuery(this).html("<i class='fa fa-spinner fa-pulse' aria-hidden='true'></i>"); setTimeout(function () {
                    var post_items = ""; var enable_button = false; var old_last_key = last_key; last_key = old_last_key + parseInt(getDsmSetting(sk_youtube_channel_videos, 'post_count')); for (var i = old_last_key; i < last_key; i++) { if (typeof data_storage[i] != 'undefined') { post_items += getFeedItem(data_storage[i], sk_youtube_channel_videos); displayDuration(sk_youtube_channel_videos, data_storage[i].id); } }
                    if (data_storage.length > last_key) { enable_button = true; }
                    sk_youtube_channel_videos.find('.sk-yt-all-posts').append(post_items); current_btn.html(current_btn_text); if (!enable_button) { sk_youtube_channel_videos.find(".sk-yt-load-more-posts").hide(); }
                    sk_youtube_channel_videos.find('.sk-yt-post-item-holder').show(); current_btn.removeAttr('disabled'); applyCustomUi(jQuery, sk_youtube_channel_videos);
                }, 500);
            }); jQuery(document).on('click', '.sk-ww-youtube-channel-videos .sk-watermark', function () { jQuery('.sk-ww-youtube-channel-videos .sk-message').slideToggle(); }); jQuery(document).on('click', '.share-action', function () {
                var clicked_element = jQuery(this); var sk_youtube_playlist_videos = jQuery(this).closest('.sk-ww-youtube-playlist-videos'); var post_to_share = clicked_element.attr('post-to-share'); var content = "<div style='text-align: center;'><a class='fb-sharer-link fa fa-facebook-official' target='_blank' href='https://www.facebook.com/sharer/sharer.php?u=" + post_to_share + "'> Share on Facebook</a></div><div style='text-align: center;'><a target='_blank' href='https://twitter.com/share?url=" + post_to_share + "' class='twitter-sharer-link fa fa-twitter'> Share on Twitter</a></div>"
                jQuery('.share-modal-wrapper .share-modal-content').html(content); jQuery('.share-modal-wrapper').addClass('open'); jQuery('.share-modal-wrapper.open').closest('body').css('overflow', 'hidden');
            }); jQuery(document).on('click', '.share-popup-close', function () { jQuery('.share-modal-wrapper').removeClass('open'); jQuery('.share-modal-wrapper').closest('body').css('overflow', 'unset'); });
        }); function showDsmYouTubeVideo(clicked_element) {
            let profile_pic_owner = ""; let profile_img_hidden_el = document.getElementById("profile_img_hidden"); if (typeof (profile_img_hidden_el) != 'undefined' && profile_img_hidden_el != null) { profile_pic_owner = document.getElementById("profile_img_hidden").value; }
            let subs_count_hidden = ""; let subs_count_hidden_el = document.getElementById("subs_count_hidden"); if (typeof (subs_count_hidden_el) != 'undefined' && subs_count_hidden_el != null) { subs_count_hidden = document.getElementById("subs_count_hidden").value; }
            jQuery('.sk_selected_ig_post').removeClass('sk_selected_ig_post'); clicked_element.addClass('sk_selected_ig_post'); var sk_youtube_channel_videos = clicked_element.closest('.sk-ww-youtube-channel-videos'); var video_id = clicked_element.attr('data-video-id'); var embed_id = getDsmEmbedId(sk_youtube_channel_videos); var json_url = app_backend_url + "youtube/youtube-video?video_id=" + video_id; var post_html = ""; var mobile_view = jQuery(document).width() <= 440; jQuery.getJSON(json_url, function (data) {
                if (data.title == "") { post_html += "<div class='sk-yt-pop-up-content' style='padding:10px; text-align:center;'>"; post_html += "<p>Sorry, video is unavailable.</p>"; post_html += "</div>"; }
                else {
                    post_html += "<div class='sk_youtube_channel_popup_container'>"; post_html += "<div class='sk_yt_channel_feed_videowrapper'>"; post_html += "<iframe class='sk_youtube_channel_player' width='853' height='480' src='https://www.youtube.com/embed/" + video_id + "?showinfo=0&autoplay=1&mute=0&enablejsapi=1&rel=0' allow='autoplay' frameborder='0' allowfullscreen></iframe>"; if (clicked_element.closest('.sk-yt-post-item-holder').prev().length) { post_html += "<button type='button' class='prev_sk_yt_channel_post'>"; post_html += "<i class='mfp-arrow mfp-arrow-left' aria-hidden='true'></i>"; post_html += "</button>"; }
                    if (clicked_element.closest('.sk-yt-post-item-holder').next().length) { post_html += "<button type='button' class='next_sk_yt_channel_post'>"; post_html += "<i class='mfp-arrow mfp-arrow-right' aria-hidden='true'></i>"; post_html += "</button>"; }
                    post_html += "</div>"; post_html += "<div class='sk-yt-pop-up-content'>"; post_html += "<h2 class='sk_yt_video_title'><b>" + data.title + "</b></h2>"; post_html += "<div class='video-info'>"; post_html += "<div class='sk-col-width'>"; if (data.view_count) {
                        post_html += "<span>"; if (mobile_view) { var view_count = data.view_count.replace(',', ''); var view_count = view_count.replace(',', ''); var view_count = view_count.replace(',', ''); var view_count = view_count.replace(',', ''); var view_count = view_count.replace(',', ''); post_html += " " + abbreviateNumber(view_count, true) + " views â€¢ "; }
                        else { post_html += " " + data.view_count + " views â€¢ "; }
                        post_html += "</span>";
                    }
                    var display_date = new Date(data.published_at); if (moment.tz) { display_date = moment(data.published_at).tz('America/Chicago').format('MMM DD, YYYY'); } else { display_date = moment(data.published_at).format('MMM DD, YYYY'); }
                    if (data.published_at) { post_html += "<span class='sk-yt-feed-m-r-15px'>"; post_html += " &nbsp;" + display_date; post_html += "</span>"; }
                    post_html += "<span class='sk-tooltip sk-fb-post-footer-icon'>"; post_html += "<span><i class='fa fa-share' aria-hidden='true'></i></span>"; post_html += "<span class='sk-tooltiptext sk-tooltip-" + video_id + " href_status_trigger_post'>"; post_html += "<a target='_blank' href='https://www.facebook.com/sharer.php?u=https://youtu.be/" + video_id + "'><i class='fa fa-facebook' aria-hidden='true'></i></a>"; post_html += "<a target='_blank' href='https://www.linkedin.com/sharing/share-offsite/?url=https://youtu.be/" + video_id + "'><i class='fa fa-linkedin' aria-hidden='true'></i></a>"; post_html += "<a target='_blank' href='https://twitter.com/intent/tweet?url=https://youtu.be/" + video_id + "'><i class='fa fa-twitter' aria-hidden='true'></i></a>"; post_html += "</span>"; post_html += "</span>"; post_html += "</div>"; post_html += "<div class='stats_style' style='width: 50%;'>"; let like_margin = ''; if (data.comment_count != "") { post_html += "<i class='fa fa-comments' aria-hidden='true'></i> " + numberFormatter(data.comment_count); post_html += "</span>"; like_margin = 'sk-yt-feed-m-l-15px'; }
                    let dislike_margin = ''; if (data.like_count != "") { post_html += "<span class='" + like_margin + "'>"; post_html += " <i class='fa fa-thumbs-up' aria-hidden='true'></i> " + numberFormatter(data.like_count); post_html += "</span>"; dislike_margin = 'sk-yt-feed-m-l-15px'; }
                    if (data.dislike_count != "") { post_html += "<span class='" + like_margin + "'>"; post_html += "<i class='fa fa-thumbs-down' aria-hidden='true'></i> " + data.dislike_count; post_html += "</span>"; }
                    post_html += "</div>"; post_html += "</div>"; post_html += "<div class='yt-video-owner'>"; post_html += "<div class='sk-col-width'>"; post_html += "<a class='sk-profile-link-container' href='https://www.youtube.com/channel/" + data.channel_id + "' target='_blank' rel='nofollow'><img class='sk-channel-thumbnail' width='48' src='" + profile_pic_owner + "'><span>" + data.channel_title + "<br><span class='sk-subscribers-count'>" + subs_count_hidden + " subscribers</span></span></a>"; post_html += "</div>"; post_html += "<div style='width: 100%;'>"; post_html += "<a href='https://www.youtube.com/channel/" + data.channel_id + "?sub_confirmation=1' class='yt_subscribe_btn' target='_blank'>SUBSCRIBE</a>"; post_html += "</div>"; post_html += "</div>"; var lines = data.description ? data.description.split("\n") : data.description; var teaser = ""; var complete = ""; for (var newline_ctr = 0; newline_ctr < lines.length; newline_ctr++) { if (newline_ctr > 2) { complete = complete + lines[newline_ctr] + "\n"; } else { teaser = teaser + lines[newline_ctr] + "\n"; } }
                    if (teaser && teaser.trim().length > 0) {
                        post_html += "<p class='sk-yt-pic-text'><pre class='yt-vid-desc-container'><span class='teaser'>" + teaser + "</span><span class='complete-desc'>" + complete + "</span></pre></p>"; if (complete)
                            post_html += "<h6 class='more-desc yt-vid-desc-container' style='cursor: pointer;'>SHOW MORE</h6><p class='show_more_container'></p>";
                    }
                    if (data.comments != undefined) {
                        if (data.comments && data.comments.length > 0)
                            post_html += "<h5>COMMENTS</h5>"; for (var comment_ctr = 0; comment_ctr < data.comments.length; comment_ctr++) { var name = data.comments[comment_ctr].snippet.topLevelComment.snippet.authorDisplayName; var text_display = data.comments[comment_ctr].snippet.topLevelComment.snippet.textDisplay; var youtube_channel_link = data.comments[comment_ctr].snippet.topLevelComment.snippet.authorChannelUrl; var past_time = timeSince(new Date(data.comments[comment_ctr].snippet.topLevelComment.snippet.updatedAt)); var profile_picture = data.comments[comment_ctr].snippet.topLevelComment.snippet.authorProfileImageUrl; post_html += "<div class='yt-v-comments-item'><div class='yt-v-comments-item-profile-image'> <a href='" + youtube_channel_link + "' target='_blank' rel='nofollow'><img src='" + profile_picture + "'></a></div>"; post_html += "<div class='yt-v-comments-item-info'><div class='yt-v-comments-item-header'><div class='yt-v-comments-item-name'> <a href='" + youtube_channel_link + "' target='_blank' rel='nofollow'>" + name + "</a></div>"; post_html += "<div class='yt-v-comments-item-past-time'>" + past_time + "</div></div><div class='yt-v-comments-item-comment'>" + text_display + "</div></div></div>"; }
                    }
                    post_html += "</div></div>";
                }
                hidePopUp(); clicked_element.closest('.sk-ww-youtube-channel-videos').find('.sk_pop_up_content').html(post_html); if (clicked_element.closest('.sk-ww-youtube-channel-videos').find('.sk_pop_up_content .yt-v-comments-item').length == 0) { clicked_element.closest('.sk-ww-youtube-channel-videos').find('.sk_pop_up_content .show_more_container').css('border', 'none'); }
                var content_src = clicked_element.closest('.sk-ww-youtube-channel-videos').find('.sk_pop_up_content'); var show_pop_up = clicked_element.closest('.sk-ww-youtube-channel-videos').find('.show_pop_up').text(); if (show_pop_up == 1) { showDsmYouTubeChannelFeedPopUp(jQuery, content_src, clicked_element); }
                applyCustomUi(jQuery, sk_youtube_channel_videos);
            }); return jQuery('.sk-ww-youtube-channel-videos .sk-ww-yt-video-info').index(clicked_element);
        }
    }
    function timeSince(date) {
        var seconds = Math.floor((new Date() - date) / 1000); var interval = Math.floor(seconds / 31536000); if (interval > 1) { return interval + " years"; }
        interval = Math.floor(seconds / 2592000); if (interval > 1) { return interval + " months"; }
        interval = Math.floor(seconds / 86400); if (interval > 1) { return interval + " days"; }
        interval = Math.floor(seconds / 3600); if (interval > 1) { return interval + " hours"; }
        interval = Math.floor(seconds / 60); if (interval > 1) { return interval + " minutes"; }
        return Math.floor(seconds) + " seconds";
    }
}(window, document));