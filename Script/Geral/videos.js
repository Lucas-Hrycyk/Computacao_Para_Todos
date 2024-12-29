// Defina os vídeos para cada tela
const videosData = {
    CarrosAplicativo: [
        {
            src: "https://www.youtube.com/embed/nyGLkqh8yHg",
            description: "Como chamar um carro pela Uber"
        },

        {
            src: "https://www.youtube.com/embed/gzUPY3Br43o",
            description: "Como chamar um carro pela 99 POP"
        },

        {
            src: "https://www.youtube.com/embed/LjqqXKeCRSk",
            description: "Como chamar um carro pelo InDrive"
        },

        {
            src: "https://www.youtube.com/embed/Ay9uANsAcmk",
            description: "Possiveis respostas pela dificuldade em conseguir chamar carro de App"
        },

        {
            src: "https://www.youtube.com/embed/LpmeClJ6UCI",
            description: "Possivel golpe realizado por falsos motoristas"
        },
        
    ],
    DicasEssenciais: [

        {
            src: "https://www.youtube.com/embed/nphKpNFHQd8",
            description: "Como proteger seu computador"
        },

        {
            src: "https://www.youtube.com/embed/UQwxreDeKYQ",
            description: "Como proteger sua rede Wi-Fi"
        },

        {
            src: "https://www.youtube.com/embed/aceN5FYs2vI",
            description: "Como atualizar seu computador"
        },

        {
            src: "https://www.youtube.com/embed/mj1QMhO6KWU",
            description: "Riscos das redes públicas"
        },

        {
            src: "https://www.youtube.com/embed/LSUwfF9lvgw",
            description: "O que é Virus de computador"
        },

        {
            src: "https://www.youtube.com/embed/vRgCuaE023g",
            description: "O que é Antivirus"
        },

        {
            src: "https://www.youtube.com/embed/ZOZMhbwAI-M",
            description: "Como Indetificar E-Mail falso"
        },

        {
            src: "https://www.youtube.com/embed/LjrN7urIORQ",
            description: "Como Indetificar site falso"
        },

        {
            src: "https://www.youtube.com/embed/9MFLzOow2NA",
            description: "Como criar senhas fortes e facil de memorizar"
        },
    ],
    
    ProtecoesExtras: [
        {
            src: "https://www.youtube.com/embed/OK2u0WEKJCg",
            description: "O que é Backup?"
        },

        {
            src: "https://www.youtube.com/embed/HLiCQmB4fUE",
            description: "Como fazer Backup usando Penrive ou Hd Externo?"
        },

        {
            src: "https://www.youtube.com/embed/yNNIrXlssJo",
            description: "Como fazer Backup em Nuvem"
        },

    ]
};

function getPageName() {
    const path = window.location.pathname;
    const page = path.split("/").pop();
    return page.split(".")[0];
}

function loadVideos(containerId) {
    const pageName = getPageName();
    const videos = videosData[pageName];

    if (!videos) {
        console.error(`Nenhum vídeo encontrado para a página "${pageName}".`);
        return;
    }

    const videoContainer = document.getElementById(containerId);

    if (!videoContainer) {
        console.error(`Container com ID "${containerId}" não encontrado.`);
        return;
    }

    videos.forEach(video => {
        const videoDiv = document.createElement("div");
        videoDiv.className = "col-12 col-sm-6 col-md-4 col-lg-3";

        videoDiv.innerHTML = `
            <div class="ratio ratio-16x9">
                <iframe 
                    src="${video.src}" 
                    title="${video.title}" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <h5 class="mt-2 text-center">${video.description}</h5>
        `;

        videoContainer.appendChild(videoDiv);
    });
}


document.addEventListener("DOMContentLoaded", () => {
    loadVideos("video-container");
});
