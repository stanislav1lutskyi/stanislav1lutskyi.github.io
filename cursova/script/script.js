const burger = document.getElementById('burger-menu');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

//Свайпер

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        loopFillGroupWithBlank: true,
        centeredSlides: false,
        slidesPerGroup: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1300: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        },
    });
});

// Генерація коментарів

const reviewsData = [
    {
        logo: "img/logo3.png",
        title: "Дивовижні результати з преміум-послугами веб-дизайну Arik.",
        text: "Arik — першокласний веб-дизайнер, який створив приголомшливий сайт. Він уважно ставився до моїх потреб, " +
            "чудове обслуговування клієнтів протягом усього процесу. Дуже рекомендую його послуги.",
        reviewer: {
            name: "Джон Сміт",
            company: "ABC Company",
            photo: "img/review6.png"
        }
    },
    {
        logo: "img/logo6.png",
        title: "Експерт Webflow і послуги SEO: відмінна робота, чудові результати.",
        text: "Мені було приємно працювати з Arik над проектом розробки сайту, і я була вражена його експертністю та професіоналізмом. " +
            "Він створив веб-сайт, який перевершив наші очікування. Я настійно рекомендую Arik для всіх ваших потреб у веб-розробці.",
        reviewer: {
            name: "Девід Кім",
            company: "Design Inc.",
            photo: "img/review5.png"
        }
    },
    {
        logo: "img/logo2.png",
        title: "Професійний спільний досвід веб-дизайну з Arik.",
        text: "Мені було приємно працювати з Arik над проектом розробки сайту, і я була вражена його експертністю та професіоналізмом. Він створив веб-сайт, який перевершив наші очікування. Я настійно рекомендую Arik для всіх ваших потреб у веб-розробці.",
        reviewer: {
            name: "Карен Лі",
            company: "Redwood Technologies",
            photo: "img/review4.png"
        }
    },
    {
        logo: "img/logo5.png",
        title: "Досвід у веб-дизайні: неперевершений з Arik.",
        text: "Arik не тільки винятковий веб-дизайнер, але й з ним приємно працювати. Він знайшов час, щоб зрозуміти мій бізнес і його унікальні потреби, і створив веб-сайт, який ідеально представляє мій бренд. Я дуже рекомендую його всім, хто шукає веб-дизайнера найвищої якості.",
        reviewer: {
            name: "Андрей Томсон",
            company: "Silverstone Corporation",
            photo: "img/review3.png"
        }
    },
    {
        logo: "img/logo4.png",
        title: "Рішення для веб-дизайну та контенту: виділяйтеся з натовпу.",
        text: "Послуги Arik з SEO допомогли моєму бізнесу покращити свою онлайн-присутність і збільшити відвідуваність сайту. Я дуже рекомендую його для всіх ваших потреб у SEO.",
        reviewer: {
            name: "Емілі Дейвіс",
            company: "Greenway Industries",
            photo: "img/review2.png"
        }
    },
    {
        logo: "img/logo1.png",
        title: "Високоякісний веб-дизайн: надзвичайна увага до деталей.",
        text: "Послуги Arik з розробки на вищому рівні. Він здатний використовувати складні ідеї та перетворювати їх на " +
            "функціональні та зручні веб-сайти. Його увага до деталей і відданість задоволенню клієнтів не мають собі рівних. " +
            "Я настійно рекомендую Arik.",
        reviewer: {
            name: "Раян Чен",
            company: "Golden Gate Solutions",
            photo: "img/review.png"
        }
    }
];

const reviewsContainer = document.querySelector(".reviews-row");

const column1 = document.createElement("div");
column1.classList.add("reviews-block");

const column2 = document.createElement("div");
column2.classList.add("reviews-block");

reviewsData.forEach((review, index) => {
    const reviewHTML = `
    <div class="review">
      <img src="${review.logo}" alt="Logo">
      <div>
        <h3>${review.title}</h3>
        <p>${review.text}</p>
      </div>
      <div class="company-block">
        <img src="${review.reviewer.photo}" alt="${review.reviewer.name}">
        <div>
          <h4>${review.reviewer.name}</h4>
          <p>${review.reviewer.company}</p>
        </div>
      </div>
    </div>
  `;

    const reviewBlock = document.createElement("div");
    reviewBlock.innerHTML = reviewHTML;

    if (index % 2 === 0) {
        column1.appendChild(reviewBlock);
    } else {
        column2.appendChild(reviewBlock);
    }
});

reviewsContainer.appendChild(column1);
reviewsContainer.appendChild(column2);
