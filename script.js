function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    msg.innerHTML = `Agora são ${String(hora).padStart(2, '0') }:${String(minuto).padStart(2, '0')}.`

    if (hora >= 0 && hora <= 12) {
        img. src = '_imagens/manha.png' 
        window.document.body.style.background = "#e38439"
    } else if (hora >= 12 && hora <= 18) {
        img. src = '_imagens/atarde.png'
        window.document.body.style.background = "#f5c493"
    } else {
        img. src = '_imagens/noite.png'
        window.document.body.style.background = "#02575e"
    }
}
