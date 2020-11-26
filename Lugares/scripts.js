function verificar() {
    var img = document.getElementById('imagem')
    var cid = document.getElementById('tn')
    var tex = document.getElementById('tex')
    var res = document.getElementById('res')
    var Global = String(tex.value)
    
    if (Global == 'Rio De Janeiro') {
        res.innerHTML = 'Voce Mora No: <strong>Rio De Janeiro</strong>'
    }else if (Global == 'Joao Pessoa') {
        res.innerHTML = 'Voce mora Em: <strong>Joao Pessoa</strong>'
    }else if (Global == 'Recife') {
        res.innerHTML = 'Voce Mora Em: <strong>Recife</strong>'
    }else {
        window.alert('ERRO: LOCAL INDISPONIVEL TENTE NOVAMNETE!')
    }
}