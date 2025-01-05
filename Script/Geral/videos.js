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
        
    ],

    bancos: [
        {
            src: "https://www.youtube.com/embed/S-1g3lx2_jE",
            description: "Como utilizar a carteira virtual (Google Pay)"
        },

        {
            src: "https://www.youtube.com/embed/xQOHrGDzVuU",
            description: "Como realizar um PIX"
        },

        {
            src: "https://www.youtube.com/embed/XmOABgqvu1I",
            description: "Cuidados ao realizar PIX"
        },

        {
            src: "https://www.youtube.com/embed/0xVnpELPAM0",
            description: "Cuidados com apps de banco no celular"
        },

        {
            src: "https://www.youtube.com/embed/NeHA5Sc-eQ8",
            description: "Como se proteger em caso de roubo ou perca do celular"
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

    PaginasCompras: [
        {
            src: "https://www.youtube.com/embed/tMDdYbfg7Xc",
            description: "Como comprar na internet com segurança?"
        },

        {
            src: "https://www.youtube.com/embed/zFCvhFmup1I",
            description: "Direitos ao comprar pela internet?"
        },
        
        {
            src: "https://www.youtube.com/embed/lkoJ4Qa3W5c",
            description: "Como comprar no mercado livre?"
        },

        {
            src: "https://www.youtube.com/embed/6cKvgxvfCag",
            description: "Como comprar na Shopee?"
        },

        {
            src: "https://www.youtube.com/embed/YHhcbY1l2U4",
            description: "Como comprar na Shopee?"
        },

        {
            src: "https://www.youtube.com/embed/0abIfV3dSv0",
            description: "Como comprar na AliExpress?"
        },

        {
            src: "https://www.youtube.com/embed/37E3aP73sII",
            description: "Como comprar na OLX?"
        },

        {
            src: "https://www.youtube.com/embed/kiCGOxTTuSs",
            description: "Como comprar na Shein?"
        },

        {
            src: "https://www.youtube.com/embed/7xXYIw-LwlI",
            description: "Como comprar passagens aéreas pela internet?"
        },

        {
            src: "https://www.youtube.com/embed/WKeh2-ZXPxw",
            description: "Como comprar passagens de ônibus pela internet?"
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

        {
            src: "https://www.youtube.com/embed/FXBwpiXytJk",
            description: "Para que serve e o que é VPN"
        },

        {
            src: "https://www.youtube.com/embed/0EY8cVx4epc",
            description: "Como usar a VPN de forma correta?"
        },

        {
            src: "https://www.youtube.com/embed/gMfkgb-vfik",
            description: "O que você precisa saber sobre a navegação anonima"
        },

    ],

    pagWeb: [
        {
            src: "https://www.youtube.com/embed/o5raT7kRWTk",
            description: "Cudados com as redes sociais"
        },

        {
            src: "https://www.youtube.com/embed/OCluuqx2Kyg",
            description: "Fake News - O que são?"
        },

        {
            src: "https://www.youtube.com/embed/S1UsOYVzSYA",
            description: "Cyberbullyng - O que é?"
        },

        {
            src: "https://www.youtube.com/embed/BszYeoeiHF0",
            description: "Facebook - Como Utilizar?"
        },

        {
            src: "https://www.youtube.com/embed/PQULFL8biAs",
            description: "Instagram - Como Utilizar?"
        },

        {
            src: "https://www.youtube.com/embed/JXSFFc6bidU",
            description: "X (Antigo Twitter) - Como Utilizar?"
        },

        {
            src: "https://www.youtube.com/embed/ghIsVurSs-o",
            description: "Whatsapp - Como Utilizar?"
        },

        {
            src: "https://www.youtube.com/embed/1DRVCu6fZLo",
            description: "Linkedin - Como Utilizar?"
        },

        {
            src: "https://www.youtube.com/embed/N0PN1z-y8pc",
            description: "TikTok - Como Utilizar?"
        },

        {
            src: "https://www.youtube.com/embed/d2SG3ofsSXk",
            description: "Pinterest - Como Utilizar?"
        },

        {
            src: "https://www.youtube.com/embed/cswHBeqNGt0",
            description: "Chat GPT - Como Utilizar?"
        },

        {
            src: "https://www.youtube.com/embed/FyOF8AZip1o",
            description: "Youtube - Como Utilizar?"
        },

        {
            src: "https://www.youtube.com/embed/zSAHLP7Vz7c",
            description: "GMail - Como Utilizar?"
        },

        {
            src: "https://www.youtube.com/embed/LSGaRJKYODk",
            description: "Google Agenda - Como Utilizar?"
        },

        {
            src: "https://www.youtube.com/embed/bFVrRr34gfs",
            description: "Google Meet - Como Utilizar?"
        },

        {
            src: "https://www.youtube.com/embed/NnEi6sei6XI",
            description: "Microsoft Teams - Como Utilizar?"
        },
        


    ],

    ferramentasBasicas: [
        {
            src: "https://www.youtube.com/embed/Mbkrr_vhE4Q",
            description: "Como Iniciar o Computador"
        },

        {
            src: "https://www.youtube.com/embed/yjfB-asZVF4",
            description: "O que é um sistema operacional"
        },

        {
            src: "https://www.youtube.com/embed/9Kx-OK9d3L0",
            description: "Ferramentas básicas - Tela Inicial e Lixeira"
        },

        {
            src: "https://www.youtube.com/embed/9SKjLh3mjg8",
            description: "Ferramentas básicas - Barra de Tarefas e Menu Iniciar"
        },

        {
            src: "https://www.youtube.com/embed/04g6PfFV-A4",
            description: "Hardware e Software"
        },

        {
            src: "https://www.youtube.com/embed/J_qW4UQbnFI",
            description: "Comandos do teclado"
        },
    ],
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
