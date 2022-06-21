$('#inputUtama').on('keyup', () => {

    $('#btn1').click(function() {
        let input = $('#inputUtama').val();
        const ubah = parseFloat(input);

        let hasil = ubah * (5/100);
        const totalAmount = hasil.toFixed(2);
        $('#tipAmount').html(totalAmount);
        hasil += ubah;

        $('#btn1').css({
            'background-color': 'hsl(172, 67%, 45%)',
            'color': 'hsl(183, 100%, 15%)'
        });
        $('#btn5').css({
            'background-color': 'hsl(183, 100%, 15%)',
            'color': 'hsl(0, 0%, 100%)'
        });
        $('#btn4').css({
            'background-color': 'hsl(183, 100%, 15%)',
            'color': 'hsl(0, 0%, 100%)'
        });
        $('#btn3').css({
            'background-color': 'hsl(183, 100%, 15%)',
            'color': 'hsl(0, 0%, 100%)'
        });
        $('#btn2').css({
            'background-color': 'hsl(183, 100%, 15%)',
            'color': 'hsl(0, 0%, 100%)'
        });

        // pembagian untuk berapa orang
        $('#person').keyup(function() {
            const persInput = $('#person').val();
            const person = parseInt(persInput);
            if(person === 0 || person == null) {
                $('#person').css('border-color', 'red');
                $('#validation').css('display', 'block');
            } else {
                $('#person').css('border-color', 'transparent');
                $('#validation').css('display', 'none');
            }

            hasil /= person;
            const totalTip = hasil.toFixed(2);
            $('#tipTotal').html(totalTip);

            // reset
            $('#reset').css({
                'background-color': 'hsl(172, 67%, 45%)',
                'cursor': 'pointer'
            });
            $('#reset').mouseover(function() {
                $('#reset').css('background-color', 'hsl(185, 41%, 84%)');
            });
            $('#reset').mouseleave(function() {
                $('#reset').css('background-color', 'hsl(172, 67%, 45%)');
            });
        });

    });

    $('#btn2').click(function() {
        const input = $('#inputUtama').val();
        const ubah = parseFloat(input);

        let hasil = ubah * (10/100);
        const totalAmount = hasil.toFixed(2);
        $('#tipAmount').html(totalAmount);
        hasil += ubah;

        $('#btn2').css({
            'background-color': 'hsl(172, 67%, 45%)',
            'color': 'hsl(183, 100%, 15%)'
        });
        $('#btn5').css({
            'background-color': 'hsl(183, 100%, 15%)',
            'color': 'hsl(0, 0%, 100%)'
        });
        $('#btn4').css({
            'background-color': 'hsl(183, 100%, 15%)',
            'color': 'hsl(0, 0%, 100%)'
        });
        $('#btn3').css({
            'background-color': 'hsl(183, 100%, 15%)',
            'color': 'hsl(0, 0%, 100%)'
        });
        $('#btn1').css({
            'background-color': 'hsl(183, 100%, 15%)',
            'color': 'hsl(0, 0%, 100%)'
        });

        // hitung tip per person
        $('#person').keyup(function() {
            const persInput = $('#person').val();
            const person = parseInt(persInput);
            if(person === 0 || person == null) {
                $('#person').css('border-color', 'red');
                $('#validation').css('display', 'block');
            } else {
                $('#person').css('border-color', 'transparent');
                $('#validation').css('display', 'none');
            }

            hasil /= person;
            const totalTip = hasil.toFixed(2);
            $('#tipTotal').html(totalTip);

            // reset
            $('#reset').css({
                'background-color': 'hsl(172, 67%, 45%)',
                'cursor': 'pointer'
            });
            $('#reset').mouseover(function() {
                $('#reset').css('background-color', 'hsl(185, 41%, 84%)');
            });
            $('#reset').mouseleave(function() {
                $('#reset').css('background-color', 'hsl(172, 67%, 45%)');
            });
        });
    });

    $('#btn3').click(function() {
        const input = $('#inputUtama').val();
        const ubah = parseFloat(input);

        let hasil = ubah * (15/100);
        const totalAmount = hasil.toFixed(2);
        $('#tipAmount').html(totalAmount);
        hasil += ubah;

        $('#btn3').css({
            'background-color': 'hsl(172, 67%, 45%)',
            'color': 'hsl(183, 100%, 15%)'
        });
        $('#btn5').css({
            'background-color': 'hsl(183, 100%, 15%)',
            'color': 'hsl(0, 0%, 100%)'
        });
        $('#btn4').css({
            'background-color': 'hsl(183, 100%, 15%)',
            'color': 'hsl(0, 0%, 100%)'
        });
        $('#btn1').css({
            'background-color': 'hsl(183, 100%, 15%)',
            'color': 'hsl(0, 0%, 100%)'
        });
        $('#btn2').css({
            'background-color': 'hsl(183, 100%, 15%)',
            'color': 'hsl(0, 0%, 100%)'
        });

        // hitung tip per person
        $('#person').keyup(function() {
            const persInput = $('#person').val();
            const person = parseInt(persInput);
            if(person === 0 || person == null) {
                $('#person').css('border-color', 'red');
                $('#validation').css('display', 'block');
            } else {
                $('#person').css('border-color', 'transparent');
                $('#validation').css('display', 'none');
            }

            hasil /= person;
            const totalTip = hasil.toFixed(2);
            $('#tipTotal').html(totalTip);

            // reset
            $('#reset').css({
                'background-color': 'hsl(172, 67%, 45%)',
                'cursor': 'pointer'
            });
            $('#reset').mouseover(function() {
                $('#reset').css('background-color', 'hsl(185, 41%, 84%)');
            });
            $('#reset').mouseleave(function() {
                $('#reset').css('background-color', 'hsl(172, 67%, 45%)');
            });
        });
    });

    $('#btn4').click(function() {
        const input = $('#inputUtama').val();
        const ubah = parseFloat(input);

        let hasil = ubah * (25/100);
        const totalAmount = hasil.toFixed(2);
        $('#tipAmount').html(totalAmount);
        hasil += ubah;

        $('#btn4').css({
            'background-color': 'hsl(172, 67%, 45%)',
            'color': 'hsl(183, 100%, 15%)'
        });
        $('#btn5').css({
            'background-color': 'hsl(183, 100%, 15%)',
            'color': 'hsl(0, 0%, 100%)'
        });
        $('#btn1').css({
            'background-color': 'hsl(183, 100%, 15%)',
            'color': 'hsl(0, 0%, 100%)'
        });
        $('#btn3').css({
            'background-color': 'hsl(183, 100%, 15%)',
            'color': 'hsl(0, 0%, 100%)'
        });
        $('#btn2').css({
            'background-color': 'hsl(183, 100%, 15%)',
            'color': 'hsl(0, 0%, 100%)'
        });

        // hitung tip per person
        $('#person').keyup(function() {
            const persInput = $('#person').val();
            const person = parseInt(persInput);
            if(person === 0 || person == null) {
                $('#person').css('border-color', 'red');
                $('#validation').css('display', 'block');
            } else {
                $('#person').css('border-color', 'transparent');
                $('#validation').css('display', 'none');
            }

            hasil /= person;
            const totalTip = hasil.toFixed(2);
            $('#tipTotal').html(totalTip);

            // reset
            $('#reset').css({
                'background-color': 'hsl(172, 67%, 45%)',
                'cursor': 'pointer'
            });
            $('#reset').mouseover(function() {
                $('#reset').css('background-color', 'hsl(185, 41%, 84%)');
            });
            $('#reset').mouseleave(function() {
                $('#reset').css('background-color', 'hsl(172, 67%, 45%)');
            });
        });
    });

    $('#btn5').click(function() {
        const input = $('#inputUtama').val();
        const ubah = parseFloat(input);

        let hasil = ubah * (50/100);
        const totalAmount = hasil.toFixed(2);
        $('#tipAmount').html(totalAmount);
        hasil += ubah;

        $('#btn5').css({
            'background-color': 'hsl(172, 67%, 45%)',
            'color': 'hsl(183, 100%, 15%)'
        });
        $('#btn1').css({
            'background-color': 'hsl(183, 100%, 15%)',
            'color': 'hsl(0, 0%, 100%)'
        });
        $('#btn4').css({
            'background-color': 'hsl(183, 100%, 15%)',
            'color': 'hsl(0, 0%, 100%)'
        });
        $('#btn3').css({
            'background-color': 'hsl(183, 100%, 15%)',
            'color': 'hsl(0, 0%, 100%)'
        });
        $('#btn2').css({
            'background-color': 'hsl(183, 100%, 15%)',
            'color': 'hsl(0, 0%, 100%)'
        });

        // hitung tip per person
        $('#person').keyup(function() {
            const persInput = $('#person').val();
            const person = parseInt(persInput);
            if(person === 0 || person == null) {
                $('#person').css('border-color', 'red');
                $('#validation').css('display', 'block');
            } else {
                $('#person').css('border-color', 'transparent');
                $('#validation').css('display', 'none');
            }

            hasil /= person;
            const totalTip = hasil.toFixed(2);
            $('#tipTotal').html(totalTip);

            // reset
            $('#reset').css({
                'background-color': 'hsl(172, 67%, 45%)',
                'cursor': 'pointer'
            });
            $('#reset').mouseover(function() {
                $('#reset').css('background-color', 'hsl(185, 41%, 84%)');
            });
            $('#reset').mouseleave(function() {
                $('#reset').css('background-color', 'hsl(172, 67%, 45%)');
            });
        });
    });

    $('#btnInput').keyup(function() {
        const input = $('#inputUtama').val();
        const ubah = parseFloat(input);
        const persen = $('#btnInput').val();
        const change = parseFloat(persen);

        let hasil = ubah * (change/100);
        const totalAmount = hasil.toFixed(2);
        $('#tipAmount').html(totalAmount);
        hasil += ubah;

        $('#btn5').css({
            'background-color': 'hsl(183, 100%, 15%)',
            'color': 'hsl(0, 0%, 100%)'
        });
        $('#btn1').css({
            'background-color': 'hsl(183, 100%, 15%)',
            'color': 'hsl(0, 0%, 100%)'
        });
        $('#btn4').css({
            'background-color': 'hsl(183, 100%, 15%)',
            'color': 'hsl(0, 0%, 100%)'
        });
        $('#btn3').css({
            'background-color': 'hsl(183, 100%, 15%)',
            'color': 'hsl(0, 0%, 100%)'
        });
        $('#btn2').css({
            'background-color': 'hsl(183, 100%, 15%)',
            'color': 'hsl(0, 0%, 100%)'
        });

        // hitung tip per person
        $('#person').keyup(function() {
            const persInput = $('#person').val();
            const person = parseInt(persInput);
            if(person === 0 || person == null) {
                $('#person').css('border-color', 'red');
                $('#validation').css('display', 'block');
            } else {
                $('#person').css('border-color', 'transparent');
                $('#validation').css('display', 'none');
            }

            hasil /= person;
            const totalTip = hasil.toFixed(2);
            $('#tipTotal').html(totalTip);

            // reset
            $('#reset').css({
                'background-color': 'hsl(172, 67%, 45%)',
                'cursor': 'pointer'
            });
            $('#reset').mouseover(function() {
                $('#reset').css('background-color', 'hsl(185, 41%, 84%)');
            });
            $('#reset').mouseleave(function() {
                $('#reset').css('background-color', 'hsl(172, 67%, 45%)');
            });
        });
    });

});