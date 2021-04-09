      const listaAnimes = [
        {
          id: 1,
          nome: "Naruto Shippuden",
          imagemUrl:
            "https://animesonline.cc/wp-content/uploads/2019/09/ic9Gb4Zz09ns3JPYHdax8u5kt0n-185x278.jpg",
          videoUrl:
            '<iframe width="560"height="315" src="https://www.youtube.com/embed/thh7bVCgDHs"title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 2,
          nome: "Shingeki No Kyojin",
          imagemUrl:
            "https://animesonline.cc/wp-content/uploads/2019/06/vlpPH5MhvhLrIsnZlApY5o9zoLH-185x278.jpg   ",
          videoUrl:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/MGRm4IzK1SQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          popular: true,
        },
        {
          id: 3,
          nome: "Boku no Hero Academia",
          imagemUrl:
            "https://animesonline.cc/wp-content/uploads/2019/07/q4NQMhtjtYc2z2mzIb77SBd83sP-185x278.jpg",
          videoUrl:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/r9xYNVHGoyU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          popular: true,
        },
        {
          id: 4,
          nome: "Black Clover",
          imagemUrl:
            "https://animesonline.cc/wp-content/uploads/2019/07/kZ3ZGOGrUvYKA1erts8ckynMduv-185x278.jpg",
          videoUrl:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/MH4pWlX4LqI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          popular: true,
        },
        {
          id: 5,
          nome: "Re:Zero",
          imagemUrl:
            "https://animesonline.cc/wp-content/uploads/2020/01/1olWUExWuOqCnYSD6tgfJcundVA-185x278.jpg",
          videoUrl:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/Slz_rahWp6Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 6,
          nome: "Tokyo Ghoul",
          imagemUrl:
            "https://animesonline.cc/wp-content/uploads/2019/06/dDxCpbuzk6pS2bRiJ99FibI2tDh-185x278.jpg",
          videoUrl:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/svkmLwDuhMI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          popular: true,
        },
        {
          id: 7,
          nome: "Jujutsu Kaisen",
          imagemUrl:
            "https://animesonline.cc/wp-content/uploads/2020/09/g1rK2nRXSidcMwNliWDIroWWGTn-185x278.jpg",
          videoUrl:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/_8oOrdl59xI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          popular: true,
        },
        {
          id: 8,
          nome: "Death Note",
          imagemUrl:
            "https://animesonline.cc/wp-content/uploads/2019/07/ewHMpGo46KFHxYh50SxDusjTVM9-185x278.jpg",
          videoUrl:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/OcvYRCYm2OE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 9,
          nome: "Tensura Nikki: Tensei Shitara",
          imagemUrl: "https://4icdn.com/img/animes/10488-large.jpg",
          videoUrl:
            '<iframe width="560" height="315" src="<iframe width="560" height="315" src="https://www.youtube.com/embed/uOzwqb74K34" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
      ];

      for (atributo of listaAnimes) {
        let divOpcoes = document.getElementById("dropOpcoes");

        let opcoes = `<option value="${atributo.id}">${atributo.nome}</option>`;

        divOpcoes.innerHTML += opcoes;
      }

      function criarModal(id) {
        let videos = listaAnimes.filter((lista) => lista.id === id)[0].videoUrl;

        let divModal = document.getElementById("modal");

        divModal.innerHTML = videos;
      }

      function filtrar(id) {
        if (id == "todos") {
          clean();

          for (let atributo of listaAnimes.reverse()) {
            let divListaAnimes = document.getElementById("generalItem");

            let divAnimes = `<div id="movie1" class="movies" onclick="criarModal(${atributo.id})" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <img src=" ${atributo.imagemUrl}" alt="movie"/>
      <p class="name-movie" id="nameMovie">${atributo.nome} </p></div>`;

            divListaAnimes.innerHTML += divAnimes;
          }

          document.getElementById("movieFeatured").style.display = "inherit";

          return;
        }

        if (document.querySelectorAll("#movie1").length == listaAnimes.length) {
          cleanAll();
        } else if (
          document.querySelector("#movie1").length !== listaAnimes.length
        ) {
          clean();
        }

        let filme = listaAnimes.filter((e) => e.id == id)[0];

        let divListaAnimes = document.getElementById("generalItem");

        let divAnimes = `<div id="movie1" class="movies" onclick="criarModal(${filme.id})" data-bs-toggle="modal" data-bs-target="#exampleModal">
<img src=" ${filme.imagemUrl}" alt="movie"/>
<p class="name-movie" id="nameMovie">${filme.nome} </p></div>`;

        divListaAnimes.innerHTML += divAnimes;

        document.getElementById("movieFeatured").style.display = "none";
      }

      function cleanAll() {
        for (let index = 0; index < listaAnimes.length; index++) {
          document.getElementById("movie1").remove();
        }
      }
      function clean() {
        document.getElementById("movie1").remove();
      }

      function criarDestaque(indice, id) {
        let divDestaques = document.getElementById("featureItemDestaque");

        let divAnimes = `<div id="movieDestaques" class="movies-destaques" onclick="criarModal(${id})" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <img src="${listaAnimes[indice].imagemUrl}" alt="movie"/>
      <p class="name-movie" id="nameMovie">${listaAnimes[indice].nome}</p></div>`;

        divDestaques.innerHTML += divAnimes;
      }

      function iniciarDestaque() {
        for (let index = 0; index < listaAnimes.length; index++) {
          if (listaAnimes[index].popular == true) {
            criarDestaque(index, listaAnimes[index].id);
          }
        }
      }
      iniciarDestaque();

      function iniciarAnimes() {
        for (let atributo of listaAnimes) {
          let divListaAnimes = document.getElementById("generalItem");

          let divAnimes = `<div id="movie1" class="movies" onclick="criarModal(${atributo.id})" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <img src=" ${atributo.imagemUrl}" alt="movie"/>
        <p class="name-movie" id="nameMovie">${atributo.nome} </p></div>`;

          divListaAnimes.innerHTML += divAnimes;
        }
      }
      iniciarAnimes();

      var nomeAnime;
      var imagemAnime;
      var videoAnime;

      function receberAnime(campo, texto) {
        switch (campo) {
          case "nome":
            nomeAnime = texto;
            break;
          case "imagem":
            imagemAnime = texto;
            break;
          case "video":
            videoAnime = texto;
            break;
        }
      }

      var anime;

      function cadastrarAnime() {
        anime = {
          id: listaAnimes.length + 1,
          nome: nomeAnime,
          imagemUrl: imagemAnime,
          videoUrl: videoAnime,
        };

        if (nomeAnime && imagemAnime && videoAnime) {
          listaAnimes.push(anime)

          if (document.querySelectorAll("#movie1").length == 1) {
            clean();
          } else {
            refreshLista();
          }

          mostrarAnimeCriado();
        }
      }

      function refreshLista() {
        for (let index = 1; index < listaAnimes.length; index++) {
          document.getElementById("movie1").remove();
        }
      }

      function mostrarAnimeCriado() {
        let divListaAnimes = document.getElementById("generalItem");

        let divAnimes = `<div id="movie1" class="movies" onclick="criarModal(${anime.id})" data-bs-toggle="modal" data-bs-target="#exampleModal">
<img src=" ${anime.imagemUrl}" alt="movie"/>
<p class="name-movie" id="nameMovie">${anime.nome} </p></div>`;

        divListaAnimes.innerHTML += divAnimes;

        document.getElementById("movieFeatured").style.display = "none";
      }

