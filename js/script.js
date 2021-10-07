$("#portfolio button").click(function(event) {
	/* Act on the event */
	//this là button được click
	//Nếu click vào button đang active thì không làm gì hết.
	if ($(this).hasClass('active')) {
		return;
	}
	//Remove active button
	//$(this).siblings('button.active'): anh em của nút được click mà có tên thẻ là button và class là active
	$(this).siblings('button.active').removeClass("active");
	//
	//Active button được click
	$(this).addClass('active');
	//
	//attr("data"): lấy giá trị của thuộc tính data
	var data = $(this).attr("data");

	// $("#portfolio .row > div"): Lấy 8 div
	var allDivs = $(`#portfolio .row > div`);
	if (data == "all") {
		//show hết
		allDivs.show();
	}
	else {
		// 
		// div nào có thuộc tính data GIỐNG với button được click
		var shownDivs = $(`#portfolio .row > div[data=${data}]`);
		shownDivs.show();


		// div nào có thuộc tính data KHÁC với button được click
		allDivs.not(shownDivs).hide();
		// alert(data);
	}
	
});

$(window).scroll(function(event) {
	/* Act on the event */
	//this là window
	//top của window so với top của document
	// console.log($(this).scrollTop());
	// 
	//Khoảng cách của top portfolio so với top của tài liệu (document)
	// console.log($("#portfolio").offset().top);
	// 
	if ($(this).scrollTop() >= $("#portfolio").offset().top) {
		$(".navbar").addClass('fixed-top');
		$("header").addClass('dummy-padding');
	}
	else {
		// console.log("normal menu");
		$(".navbar").removeClass('fixed-top');
		$("header").removeClass('dummy-padding');
	}

	toggleBackToTop();
	
});
toggleBackToTop();

function toggleBackToTop() {
	//Ẩn hiện back to top
	if ($(window).scrollTop() == 0) {
		//Ẩn
		$(".back-to-top").fadeOut();//Ẩn
	}
	else {
		//Ẩn
		$(".back-to-top").fadeIn();//Hiện
	}
}
