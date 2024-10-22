$(document).ready(function () {
    $('#consultarButton').click(function () {
        var uf = $('#ufInput').val();
        $.ajax({
            url: `https://brasilapi.com.br/api/ibge/municipios/v1/${uf}`,
            method: 'GET',
            success: function (data) {
                var municipios = data.map(function (municipio) {
                    return municipio.nome;
                });
                $('#resultado').html(`<p>Municípios: ${municipios.join(', ')}</p>`);
            },
            error: function () {
                $('#resultado').html('<p>UF não encontrada. Por favor, tente novamente.</p>');
            }
        });
    });
});