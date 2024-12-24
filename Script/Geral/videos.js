// Defina os vídeos para cada tela
const videosData = {
    uber: [
        {
            src: "https://www.youtube.com/embed/nyGLkqh8yHg",
            title: "Vídeo 1",
            description: "Como Configurar e chamar Uber"
        },
        {
            src: "https://www.youtube.com/embed/LpmeClJ6UCI",
            title: "Vídeo 2",
            description: "Golpes de motoristas falsos da Uber no Aeroporto"
        }
    ],
    about: [
        {
            src: "https://www.youtube.com/embed/anotherVideo",
            title: "Vídeo 3",
            description: "Tutorial sobre segurança"
        }
    ],
    contact: [
        {
            src: "https://www.youtube.com/embed/exampleVideo",
            title: "Vídeo 4",
            description: "Entre em contato conosco"
        }
    ]
};

// Função para obter o nome da página atual
function getPageName() {
    const path = window.location.pathname;
    const page = path.split("/").pop(); // Obtém o último segmento da URL
    return page.split(".")[0]; // Remove a extensão, como ".html"
}

// Função para carregar vídeos com base na página
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
