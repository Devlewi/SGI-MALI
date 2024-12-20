// src/app/home/page.tsx
import { Metadata } from "next";
import Head from "next/head";
import "../styles/styles.css"; // Importation du fichier CSS
import Script from "next/script";

//import "owl.carousel/dist/assets/owl.carousel.css";
//import "owl.carousel/dist/assets/owl.theme.default.css";

export const metadata: Metadata = {
  title: "ACCUEIL | SGI Mali",
  description: "Page d'accueil de SGI Mali",
};

export default function Home() {
  return (
    <>
      <Head>
        {/* Meta tags */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>SGI MALI</title>
                
      </Head>

      

      <>
      <nav id="menu">
        <ul>
          <li className="">
            <a href="">Accueil</a>
          </li>
          <li>
            <a href="#">Présentation</a>
            <ul>
              <li>
                <a href="historique.html">
                  <span>Historique</span>
                </a>
              </li>
              <li>
                <a href="forme-juridique.html">
                  <span>Forme juridique</span>
                </a>
              </li>
              <li>
                <a href="actionnariat.html">
                  <span>Actionnariat</span>
                </a>
              </li>
              <li>
                <a href="mission.html">
                  <span>Mission</span>
                </a>
              </li>
              <li>
                <a href="equipe.html">
                  <span>Equipe</span>
                </a>
              </li>
              <li>
                <a href="organisation.html">
                  <span>Organisation</span>
                </a>
              </li>
              <li>
                <a href="relation-clientele.html">
                  <span>Relation clientèle</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Activités </a>
            <ul>
              <li>
                <a href="#">
                  <span>Privatisation</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Financement des entreprises</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Gestion des portefeuilles</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Gestion du registre des actionnaires</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Intermediation</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Réalisation</a>
            <ul>
              <li>
                <a href="#">
                  <span>Emissions d’emprunts privés</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Emissions d’emprunts publics</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Capacité de placement de titre</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Téléchargements</a>
          </li>
          <li>
            <a href="#">Souscription</a>
          </li>
          <li>
            <a href="nous-contacter.html">Nous contacter</a>
          </li>
          <li>
            <a href="faq.html">FAQ</a>
          </li>
        </ul>
      </nav>
      </>



        {/* Insertion du script */}
        <Script id="scroll-script" strategy="afterInteractive">
          {`
          // Écouteur d'événement pour le défilement
          window.onscroll = function () {
            var navWarp = document.querySelector('.nav-warp-h2');  // Sélectionner le nav-warp-h2
            var isMobile = window.innerWidth <= 767;  // Vérifier si la largeur de l'écran est <= 767px (mobile)

            // Déterminer la valeur du margin-top en fonction de la taille de l'écran
            var marginTopValue = isMobile ? '-51px' : '-73px';

            if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
              // Quand l'utilisateur commence à défiler, appliquer la margin-top selon l'écran
              navWarp.style.marginTop = marginTopValue;
            } else {
              // Quand l'utilisateur revient en haut de la page, remettre margin-top: 0
              navWarp.style.marginTop = '0px';
            }
          };
        



        `}
        </Script>





  {/* /Mobile Menu */}
  <header className="header-h2">
    <div
      className="topbar tb-dark tb-md"
      style={{ background: "#0a2c4f !important" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="topbar-home2">
              <div className="tb-contact tb-iconbox">
                <ul>
                  <li>
                    <a href="contact.html">
                      <i className="fa fa-map-marker" aria-hidden="true" />
                      <span>
                        <i>Immeuble du PATRONAT</i>3ème étage, Hamdallaye
                        ACI2000 Mali
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:admin@amwal.com">
                      <i className="fa fa-envelope" aria-hidden="true" />
                      <span>
                        <i>contactez-nous à</i>sgi@sgimali.com
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="tel:0100123456789">
                      <i className="fa fa-phone" aria-hidden="true" />
                      <span>
                        <i>Téléphone</i> +223 20 29 29 72
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tb-social-lan language">
                <ul>
                  <li>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="facebook"
                    >
                      <i className="fab fa-facebook" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="twitter"
                    >
                      <i
                        className="fa-brands fa-x-twitter"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="twitter"
                    >
                      <i className="fab fa-whatsapp" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="twitter"
                    >
                      <i className="fab fa-linkedin" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /topbar */}
    <div
      className="nav-warp nav-warp-h2"
      style={{
        position: "fixed",
        width: "100%",
        zIndex: 1,
        boxShadow: "0 2px 20px 0 rgba(0,0,0,.15)"
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="navi-warp-home-2">
              <a href="index.html" className="logo">
                <img
                  src="images/Logo-on-light.png"
                  className="img-responsive"
                  alt="Image"
                />
              </a>
              <nav>
                <ul className="navi-level-1 active-subcolor">
                  <li className="active">
                    <a href="">Accueil</a>
                  </li>
                  <li>
                    <a href="#">Présentation</a>
                    <ul className="navi-level-2">
                      <li>
                        <a href="historique.html">
                          <span>Historique</span>
                        </a>
                      </li>
                      <li>
                        <a href="forme-juridique.html">
                          <span>Forme juridique</span>
                        </a>
                      </li>
                      <li>
                        <a href="actionnariat.html">
                          <span>Actionnariat</span>
                        </a>
                      </li>
                      <li>
                        <a href="mission.html">
                          <span>Mission</span>
                        </a>
                      </li>
                      <li>
                        <a href="equipe.html">
                          <span>Equipe</span>
                        </a>
                      </li>
                      <li>
                        <a href="organisation.html">
                          <span>Organisation</span>
                        </a>
                      </li>
                      <li>
                        <a href="relation-clientele.html">
                          <span>Relation clientèle</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Activités</a>
                    <ul className="navi-level-2">
                      <li>
                        <a href="#">
                          <span>Privatisation</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>Financement des entreprises</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>Gestion des portefeuilles</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>Gestion du registre des actionnaires</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>Intermediation</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Réalisation</a>
                    <ul className="navi-level-2">
                      <li>
                        <a href="#">
                          <span>Emissions d’emprunts privés</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>Emissions d’emprunts publics</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>Capacité de placement de titre</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Téléchargements</a>
                  </li>
                  <li>
                    <a href="souscription.html">Souscription</a>
                  </li>
                  <li>
                    <a href="nous-contacter.html">Nous contacter</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQ</a>
                  </li>
                </ul>
              </nav>
              <ul className="subnavi">
                <li>
                  <a className="btn-search-navi" href="#/">
                    <i className="fa fa-search" aria-hidden="true" />
                  </a>
                  <div className="search-popup">
                    <form className="form-search-navi">
                      <div className="input-group">
                        <input
                          className="form-control"
                          placeholder="Search Here"
                          type="text"
                        />
                      </div>
                      {/* /input-group */}
                    </form>
                  </div>
                </li>
              </ul>
              <a href="#menu" className="btn-menu-mobile">
                <i className="fa fa-bars" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /nav */}
    <div className="topbar tb-transparent tb-gradient tb-sm-50 tb-h9 hidden-xs hidden-sm">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="topbar-home1 topbar-home10">
              <div className="tb-contact tb-oneline">
                <div className="scroll-up-container">
                  <ul className="scroll-up">
                    <li>
                      <a href="#" style={{ fontSize: 16 }}>
                        SVOC 2 395{" "}
                        <span
                          style={{ color: "#38ab60", fontWeight: "bolder" }}
                        >
                          0.00%
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ fontSize: 16 }}>
                        UNLC 7 030{" "}
                        <span
                          style={{ color: "#38ab60", fontWeight: "bolder" }}
                        >
                          0.00%
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ fontSize: 16 }}>
                        SIVC 800{" "}
                        <span style={{ fontWeight: "bolder" }}>0.00%</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ fontSize: 16 }}>
                        CABC 1 155{" "}
                        <span style={{ fontWeight: "bolder" }}>0.00%</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ fontSize: 16 }}>
                        ABJC <span style={{ fontWeight: "bolder" }}>1 575</span>
                        &nbsp;&nbsp;
                        <span style={{ color: "red", fontWeight: "bolder" }}>
                          -1.25%
                        </span>
                      </a>
                      &nbsp;&nbsp;
                      <span
                        style={{
                          fontWeight: "bolder",
                          fontSize: 16,
                          color: "white"
                        }}
                      >
                        CB
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tb-social-lan language">
                {/*ul>
													<li><a href="#" data-toggle="tooltip" data-placement="bottom" title="facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
													<li><a href="#" data-toggle="tooltip" data-placement="bottom" title="twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
													<li><a href="#" data-toggle="tooltip" data-placement="bottom" title="google plus"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
													<li><a href="#" data-toggle="tooltip" data-placement="bottom" title="youtube"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
												</ul*/}
                <div className="warp-lang">
                  <span
                    style={{
                      color: "white",
                      fontSize: 16,
                      fontWeight: "bolder"
                    }}
                  >
                    COTATION DU JOUR
                  </span>
                  <div className="fancy-select">
                    <select
                      className="lang fancified"
                      style={{
                        display: "block",
                        width: 1,
                        height: 1,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        opacity: 0
                      }}
                    ></select>
                    <div className="trigger">
                      <div className="flags undefined" />
                    </div>
                    <ul className="options" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n\t\t\t\t.topbar {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t}\n\n\t\t\t\t.scroll-up-container {\n\t\t\t\t\theight: 40px;\n\t\t\t\t\t/* Ajustez la hauteur selon vos besoins */\n\n\t\t\t\t}\n\n\t\t\t\t.scroll-up {\n\t\t\t\t\tanimation: scroll-up 5s linear infinite;\n\t\t\t\t}\n\n\t\t\t\t@keyframes scroll-up {\n\t\t\t\t\t0% {\n\t\t\t\t\t\ttransform: translateY(100%);\n\t\t\t\t\t}\n\n\t\t\t\t\t100% {\n\t\t\t\t\t\ttransform: translateY(-100%);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t"
      }}
    />
    <br />
    <div
      className="topbar tb-transparent tb-gradient tb-sm-50 tb-h9 hidden-xs hidden-sm"
      style={{ marginTop: 10 }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="topbar-home1 topbar-home10">
              <div className="tb-contact tb-oneline">
                <div className="scroll-up-container">
                  <ul className="scroll-up">
                    <li>
                      <a href="#" style={{ fontSize: 16 }}>
                        SVOC 2 395{" "}
                        <span
                          style={{ color: "#38ab60", fontWeight: "bolder" }}
                        >
                          0.00%
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ fontSize: 16 }}>
                        UNLC 7 030{" "}
                        <span
                          style={{ color: "#38ab60", fontWeight: "bolder" }}
                        >
                          0.00%
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ fontSize: 16 }}>
                        SIVC 800{" "}
                        <span style={{ fontWeight: "bolder" }}>0.00%</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ fontSize: 16 }}>
                        CABC 1 155{" "}
                        <span style={{ fontWeight: "bolder" }}>0.00%</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ fontSize: 16 }}>
                        ABJC <span style={{ fontWeight: "bolder" }}>1 575</span>
                        &nbsp;&nbsp;
                        <span style={{ color: "red", fontWeight: "bolder" }}>
                          -1.25%
                        </span>
                      </a>
                      &nbsp;&nbsp;
                      <span
                        style={{
                          fontWeight: "bolder",
                          fontSize: 16,
                          color: "white"
                        }}
                      >
                        CB
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tb-social-lan language">
                
                <div className="warp-lang">
                  <span
                    style={{
                      color: "white",
                      fontSize: 16,
                      fontWeight: "bolder"
                    }}
                  >
                    COTATION DU JOUR
                  </span>
                  <div className="fancy-select">
                    <select
                      className="lang fancified"
                      style={{
                        display: "block",
                        width: 1,
                        height: 1,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        opacity: 0
                      }}
                    ></select>
                    <div className="trigger">
                      <div className="flags undefined" />
                    </div>
                    <ul className="options" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* /End Header 1 Warp */}
  {/*fin menu*/}




  {/* /End Header 1 Warp */}
  {/* Slider */}
  <section id="slider" className="no-padding">
    <div
      id="slide_1_wrapper"
      className="rev_slider_wrapper fullwidthbanner-container"
    >
      {/* START REVOLUTION SLIDER 5.0.7 auto mode */}
      <div
        id="slider_7"
        className="rev_slider fullwidthabanner slider-home7"
        style={{ display: "none" }}
        data-version="5.0.7"
      >
        <ul>
          {/* SLIDE  */}
          <li data-title="FOCUS ON">
            {/* MAIN IMAGE */}
            <img
              src="images/Slider/s00.png"
              alt=""
              data-bgposition="center center"
              data-bgfit="cover"
              data-bgrepeat="no-repeat"
              className="rev-slidebg"
              data-no-retina=""
            />
            {/* LAYERS */}
            {/* LAYER NR. 1 */}
            <div
              className="tp-caption tp-resizeme"
              data-x="['left','left','center','center']"
              data-hoffset=""
              data-y="center"
              data-voffset=""
              data-transform_idle="o:1;"
              data-width="['600','600','481','481']"
              data-height="['390','390','540','540']"
              data-transform_in="x:right;s:2000;e:Power4.easeInOut;opacity:1"
              data-transform_out="x:left;s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;opacity:0"
              data-start={1000}
              data-responsive_offset="on"
            >
              <div className="home7-block-text">
                <br />
                <br />
                <p className="sl-s4" style={{}}>
                  LA SGI-MALI VOUS SOUHAITE{" "}
                </p>
                <p className="sl-s2" style={{}}>
                  LA BIENVENUE
                </p>
                <p
                  className="sl-s3"
                  style={{ fontFamily: "Roboto Slab, serif" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </p>
                {/*a href="#" class="sl-btn-1">Voir plus</a*/}
                <a href="#" className="sl-btn-2">
                  Détails
                </a>
              </div>
            </div>
          </li>
          {/* SLIDE  */}
          <li data-title="FOCUS ON">
            {/* MAIN IMAGE */}
            <img
              src="images/Slider/slide2.png"
              alt=""
              data-bgposition="center center"
              data-bgfit="cover"
              data-bgrepeat="no-repeat"
              className="rev-slidebg"
              data-no-retina=""
            />
            {/* LAYERS */}
            {/* LAYER NR. 1 */}
            <div
              className="tp-caption tp-resizeme"
              data-x="['left','left','center','center']"
              data-hoffset=""
              data-y="center"
              data-voffset=""
              data-transform_idle="o:1;"
              data-width="['600','600','481','481']"
              data-height="['390','390','540','540']"
              data-transform_in="x:right;s:2000;e:Power4.easeInOut;opacity:1"
              data-transform_out="x:left;s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;opacity:0"
              data-start={1000}
              data-responsive_offset="on"
            >
              <div className="home7-block-text">
                <br />
                <br />
                <p className="sl-s4" style={{}}>
                  AVIS DE DÉMÉNAGEMENT{" "}
                </p>
                <p className="sl-s2" style={{}}>
                  LA SGI MALI ...
                </p>
                <p
                  className="sl-s3"
                  style={{ fontFamily: "Roboto Slab, serif" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </p>
                {/*a href="#" class="sl-btn-1">Voir plus</a*/}
                <a href="#" className="sl-btn-2">
                  Détails
                </a>
              </div>
            </div>
          </li>
          {/* SLIDE  */}
          <li data-title="FOCUS ON">
            {/* MAIN IMAGE */}
            <img
              src="images/Slider/s00.png"
              alt=""
              data-bgposition="center center"
              data-bgfit="cover"
              data-bgrepeat="no-repeat"
              className="rev-slidebg"
              data-no-retina=""
            />
            {/* LAYERS */}
            {/* LAYER NR. 1 */}
            <div
              className="tp-caption tp-resizeme"
              data-x="['left','left','center','center']"
              data-hoffset=""
              data-y="center"
              data-voffset=""
              data-transform_idle="o:1;"
              data-width="['600','600','481','481']"
              data-height="['390','390','540','540']"
              data-transform_in="x:right;s:2000;e:Power4.easeInOut;opacity:1"
              data-transform_out="x:left;s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;opacity:0"
              data-start={1000}
              data-responsive_offset="on"
            >
              <div className="home7-block-text">
                <br />
                <br />
                <p className="sl-s4" style={{}}>
                  LA SGI-MALI VOUS SOUHAITE{" "}
                </p>
                <p className="sl-s2" style={{}}>
                  LA BIENVENUE
                </p>
                <p
                  className="sl-s3"
                  style={{ fontFamily: "Roboto Slab, serif" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </p>
                {/*a href="#" class="sl-btn-1">Voir plus</a*/}
                <a href="#" className="sl-btn-2">
                  Détails
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
  {/* /Slider */}



  <section className="bg-case-h9 py-5">
  <div className="container">
    {/* Titre de la section */}
    <div
      className="title-block text-center title-pd"
      style={{ marginTop: "-130px" }}
    >
      <h3 style={{ fontSize: 28, color: "#021039" }}>Mot du Président</h3>
      <p className="sub-title" style={{ fontSize: 15, lineHeight: 2 }}>
        Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text{" "}
      </p>
      <span className="bottom-title" />
    </div>
    {/* Contenu principal */}
    <div className="row align-items-center">
      {/* Colonne gauche : image */}
      <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
        <img
          src="images/president.jpg"
          alt="Président"
          className="img-responsive img-thumbnail"
          style={{ marginBottom: 20, borderColor: "#f8f8f8 !important" }}
        />
      </div>
      {/* Colonne droite : texte */}
      <div className="col-lg-6 col-md-12">
        <div className="content-container">
          <h3
            className="text-title"
            style={{ fontSize: 22, fontWeight: "bold", color: "#333" }}
          >
            Notre mission et vision
          </h3>
          <p
            className="text-details"
            style={{ fontSize: 14, color: "#555", lineHeight: "1.8" }}
          >
            Notre société la SGI-Mali a été créée grâce à l'impulsion de
            l'Association professionnelle des banques et établissements
            financiers (APBEF), le 11 décembre 1996, et en partenariat avec la
            Chambre de commerce et d'industrie.
          </p>
          <p
            className="text-details"
            style={{ fontSize: 14, color: "#555", lineHeight: "1.8" }}
          >
            La SGI-Mali bénéficie du monopole de la négociation des titres
            (actions, obligations…) à la Bourse régionale des valeurs mobilières
            (BRVM), de la tenue des comptes-titres, ainsi que de façon générale,
            de l'exécution de tout appel public à l'épargne dans la zone UEMOA.
          </p>
          <p
            className="text-details"
            style={{ fontSize: 14, color: "#555", lineHeight: "1.8" }}
          >
            Nous sommes engagés à accompagner les PME/PMI du Mali et de l’UEMOA
            à financer leur croissance par le marché. Une équipe jeune,
            professionnelle et dynamique est à votre disposition pour analyser
            vos objectifs d’investissements, et vous accompagner dans leur
            réalisation.
          </p>
          <center>
            <a
              href="about.html"
              className="btn btn-primary mt-3"
              style={{
                padding: "10px 20px",
                fontSize: 14,
                fontWeight: "bold",
                textTransform: "uppercase",
                backgroundColor: "#00a0e2"
              }}
            >
              En savoir plus
            </a>
          </center>
        </div>
      </div>
    </div>
  </div>
</section>



<section
  className="no-padding offer-h10"
  style={{ backgroundColor: "#f8f8f8" }}
>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div
          className="title-block text-center title-pd"
          style={{ marginTop: 0 }}
        >
          <h3 style={{ fontSize: 28, color: "#021039" }}>Nos services</h3>
          <p className="sub-title" style={{ fontSize: 15, lineHeight: 2 }}>
            Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text{" "}
          </p>
          <span className="bottom-title" />
        </div>
        <div className="warp-full-width services-h1-warp offer-h10-warp">
          <div
            className="col-md-4 col-sm-6"
            style={{ backgroundColor: "#021039" }}
          >
            <div className="item-offer-h10">
              <div className="iconbox-type-xs text-center">
                <span className="lnr lnr-briefcase" style={{ fontSize: 60 }} />
                <h4
                  style={{ fontSize: 21, marginBottom: "-1px", color: "white" }}
                >
                  Professionnel
                </h4>
                <p style={{ fontSize: 14, color: "white" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maiores voluptates nihil ducimus .
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="item-offer-h10 bg-light-sky">
              <div className="iconbox-type-xs text-center">
                <span
                  className="lnr lnr-arrow-up"
                  style={{ color: "white", fontSize: 60 }}
                />
                <h4
                  style={{ fontSize: 21, color: "white", marginBottom: "-1px" }}
                >
                  Accumulation
                </h4>
                <p style={{ color: "white", fontSize: 14 }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maiores voluptates nihil ducimus .
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-4 col-sm-6"
            style={{ backgroundColor: "#021039" }}
          >
            <div className="item-offer-h10">
              <div className="iconbox-type-xs text-center">
                <span className="lnr lnr-chart-bars" style={{ fontSize: 60 }} />
                <h4
                  style={{ fontSize: 21, marginBottom: "-1px", color: "white" }}
                >
                  Business Planning
                </h4>
                <p style={{ fontSize: 14, color: "white" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maiores voluptates nihil ducimus .
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="item-offer-h10 bg-light-sky">
              <div className="iconbox-type-xs text-center">
                <span
                  className="lnr lnr-layers"
                  style={{ fontSize: 60, color: "white" }}
                />
                <h4
                  style={{ fontSize: 21, marginBottom: "-1px", color: "white" }}
                >
                  Risk Management
                </h4>
                <p style={{ fontSize: 14, color: "white" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maiores voluptates nihil ducimus .
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-4 col-sm-6"
            style={{ backgroundColor: "#021039" }}
          >
            <div className="item-offer-h10">
              <div className="iconbox-type-xs text-center">
                <center>
                  <img
                    src="images/money.png"
                    className="img img-responsive"
                    style={{ width: 65 }}
                  />
                </center>
                <h4
                  style={{ fontSize: 21, marginBottom: "-1px", color: "white" }}
                >
                  Taxation
                </h4>
                <p style={{ fontSize: 14, color: "white" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maiores voluptates nihil ducimus .
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="item-offer-h10 bg-light-sky">
              <div className="iconbox-type-xs text-center">
                <span
                  className="lnr lnr-arrow-up"
                  style={{ color: "white", fontSize: 60 }}
                />
                <h4
                  style={{ fontSize: 21, marginBottom: "-1px", color: "white" }}
                >
                  Accumulation
                </h4>
                <p style={{ color: "white", fontSize: 14 }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maiores voluptates nihil ducimus .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*div class="col-md-12 text-center">
							<a href="#" class="ot-btn btn-border-dark-color">View All</a>
						</div*/}
    </div>
  </div>
</section>




<section className="bg-case-h9 py-5">
  <div className="container">
    {/* Titre de la section */}
    <div
      className="title-block text-center title-pd"
      style={{ marginTop: "-130px" }}
    >
      <h3 style={{ fontSize: 28, color: "#021039" }}>Notre actualité</h3>
      <p className="sub-title" style={{ fontSize: 15, lineHeight: 2 }}>
        Les dernières nouvelles et événements
      </p>
      <span className="bottom-title" />
    </div>
    <div className="row" style={{ marginBottom: 20 }}>
      {/* Carte d'actualité */}
      <div
        className="col-lg-4 col-md-6 col-sm-12 mb-4"
        style={{ marginBottom: 25 }}
      >
        <div className="news-card shadow">
          <a href="#">
            <div className="news-tag">Actualité</div>
            <img
              src="images/News/n7.jpeg"
              className="img-fluid news-image"
              alt="Actualité"
            />
          </a>
          <div className="news-content p-3" style={{ padding: 20 }}>
            <h4 className="news-title">
              <a
                href="#"
                className="text-decoration-none"
                style={{ color: "#021039", fontWeight: 600 }}
              >
                NESTLE CI affiche un résultat net de 8 milliards FCFA au premier
                semestre 2023...
              </a>
            </h4>
            <p className="news-date text-muted mt-2">Le 21 Novembre 2024</p>
          </div>
        </div>
      </div>
      {/* Répétition pour d'autres cartes */}
      <div
        className="col-lg-4 col-md-6 col-sm-12 mb-4"
        style={{ marginBottom: 25 }}
      >
        <div className="news-card shadow">
          <a href="#">
            <div className="news-tag">After Work</div>
            <img
              src="images/News/n8.jpeg"
              className="img-fluid news-image"
              alt="After Work"
            />
          </a>
          <div className="news-content p-3" style={{ padding: 20 }}>
            <h4 className="news-title">
              <a
                href="#"
                className="text-decoration-none"
                style={{ color: "#021039", fontWeight: 600 }}
              >
                NESTLE CI affiche un résultat net de 8 milliards FCFA au premier
                semestre 2023...
              </a>
            </h4>
            <p className="news-date text-muted mt-2">Le 21 Novembre 2024</p>
          </div>
        </div>
      </div>
      <div
        className="col-lg-4 col-md-6 col-sm-12 mb-4"
        style={{ marginBottom: 25 }}
      >
        <div className="news-card shadow">
          <a href="#">
            <div className="news-tag">Cérémonie</div>
            <img
              src="images/News/n9.jpeg"
              className="img-fluid news-image"
              alt="Cérémonie"
            />
          </a>
          <div className="news-content p-3" style={{ padding: 20 }}>
            <h4 className="news-title">
              <a
                href="#"
                className="text-decoration-none"
                style={{ color: "#021039", fontWeight: 600 }}
              >
                NESTLE CI affiche un résultat net de 8 milliards FCFA au premier
                semestre 2023...
              </a>
            </h4>
            <p className="news-date text-muted mt-2">Le 21 Novembre 2024</p>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      {/* Carte d'actualité */}
      <div
        className="col-lg-4 col-md-6 col-sm-12 mb-4"
        style={{ marginBottom: 25 }}
      >
        <div className="news-card shadow">
          <a href="#">
            <div className="news-tag">Actualité</div>
            <img
              src="images/News/n7.jpeg"
              className="img-fluid news-image"
              alt="Actualité"
            />
          </a>
          <div className="news-content p-3" style={{ padding: 20 }}>
            <h4 className="news-title">
              <a
                href="#"
                className="text-decoration-none"
                style={{ color: "#021039", fontWeight: 600 }}
              >
                NESTLE CI affiche un résultat net de 8 milliards FCFA au premier
                semestre 2023...
              </a>
            </h4>
            <p className="news-date text-muted mt-2">Le 21 Novembre 2024</p>
          </div>
        </div>
      </div>
      {/* Répétition pour d'autres cartes */}
      <div
        className="col-lg-4 col-md-6 col-sm-12 mb-4"
        style={{ marginBottom: 25 }}
      >
        <div className="news-card shadow">
          <a href="#">
            <div className="news-tag">After Work</div>
            <img
              src="images/News/n8.jpeg"
              className="img-fluid news-image"
              alt="After Work"
            />
          </a>
          <div className="news-content p-3" style={{ padding: 20 }}>
            <h4 className="news-title">
              <a
                href="#"
                className="text-decoration-none"
                style={{ color: "#021039", fontWeight: 600 }}
              >
                NESTLE CI affiche un résultat net de 8 milliards FCFA au premier
                semestre 2023...
              </a>
            </h4>
            <p className="news-date text-muted mt-2">Le 21 Novembre 2024</p>
          </div>
        </div>
      </div>
      <div
        className="col-lg-4 col-md-6 col-sm-12 mb-4"
        style={{ marginBottom: 25 }}
      >
        <div className="news-card shadow">
          <a href="#">
            <div className="news-tag">Cérémonie</div>
            <img
              src="images/News/n9.jpeg"
              className="img-fluid news-image"
              alt="Cérémonie"
            />
          </a>
          <div className="news-content p-3" style={{ padding: 20 }}>
            <h4 className="news-title">
              <a
                href="#"
                className="text-decoration-none"
                style={{ color: "#021039", fontWeight: 600 }}
              >
                NESTLE CI affiche un résultat net de 8 milliards FCFA au premier
                semestre 2023...
              </a>
            </h4>
            <p className="news-date text-muted mt-2">Le 21 Novembre 2024</p>
          </div>
        </div>
      </div>
    </div>
    <br />
    {/* Bouton Voir Plus #00a0e2*/}
    <div className="text-center mt-4">
      <a
        href="actualite.html"
        className="btn btn-primary mt-3"
        style={{
          padding: "10px 20px",
          fontSize: 14,
          fontWeight: "bold",
          textTransform: "uppercase",
          backgroundColor: "#00a0e2"
        }}
      >
        Tout Voir
      </a>
    </div>
  </div>
</section>


<>
  <section className="bg-light-grey" style={{ backgroundColor: "#f8f8f8" }}>
    <div className="container">
      <div
        className="title-block text-center title-pd"
        style={{ marginTop: "-130px" }}
      >
        <h3 style={{ fontSize: 28, color: "#021039" }}>Nos clients</h3>
        <p className="sub-title" style={{ fontSize: 15, lineHeight: 2 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <span className="bottom-title" />
      </div>
      <div className="row">
        <div className="col-md-12">
          <div id="partner-h2" className="owl-partner-h2">
            <div className="item-partner">
              <a href="#">
                <img
                  src="images/Partner/1608030479810.jpeg"
                  className="img-responsive partner-img"
                  alt="Image"
                />
              </a>
            </div>
            <div className="item-partner">
              <a href="#">
                <img
                  src="images/Partner/amfa.jpeg"
                  className="img-responsive partner-img"
                  alt="Image"
                />
              </a>
            </div>
            <div className="item-partner">
              <a href="#">
                <img
                  src="images/Partner/brvm.jpg"
                  className="img-responsive partner-img"
                  alt="Image"
                />
              </a>
            </div>
            <div className="item-partner">
              <a href="#">
                <img
                  src="images/Partner/logo_UT_HD-1.jpg"
                  className="img-responsive partner-img"
                  alt="Image"
                />
              </a>
            </div>
            <div className="item-partner">
              <a href="#">
                <img
                  src="images/Partner/amfa.jpeg"
                  className="img-responsive partner-img"
                  alt="Image"
                />
              </a>
            </div>
            <div className="item-partner">
              <a href="#">
                <img
                  src="images/Partner/brvm.jpg"
                  className="img-responsive partner-img"
                  alt="Image"
                />
              </a>
            </div>
            <div className="item-partner">
              <a href="#">
                <img
                  src="images/Partner/logo_UT_HD-1.jpg"
                  className="img-responsive partner-img"
                  alt="Image"
                />
              </a>
            </div>
            <div className="item-partner">
              <a href="#">
                <img
                  src="images/Partner/amfa.jpeg"
                  className="img-responsive partner-img"
                  alt="Image"
                />
              </a>
            </div>
            <div className="item-partner">
              <a href="#">
                <img
                  src="images/Partner/1608030479810.jpeg"
                  className="img-responsive partner-img"
                  alt="Image"
                />
              </a>
            </div>
            <div className="item-partner">
              <a href="#">
                <img
                  src="images/Partner/brvm.jpg"
                  className="img-responsive partner-img"
                  alt="Image"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Partner */}
</>


      <footer className="footer-home-10">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div
                className="widget widget-footer widget-footer-text"
                style={{ padding: "30px 0px !important" }}
              >
                <p style={{ fontSize: 14 }}></p>
                <div
                  className="title-block title-on-dark title-xs"
                  style={{ marginBottom: 10 }}
                >
                  <h4>Liens utiles</h4>
                  <span className="bottom-title" />
                </div>
                <ul style={{ marginLeft: 20 }}>
                  <li>
                    <a href="">CEDEAO</a>
                  </li>
                  <li>
                    <a href="">UEMOA</a>
                  </li>
                  <li>
                    <a href="">CREPMF</a>
                  </li>
                  <li>
                    <a href="">BRVM</a>
                  </li>
                  <li>
                    <a href="">DNTCP</a>
                  </li>
                </ul>
                <p />
                <p style={{ fontSize: 14 }}></p>
                <div
                  className="title-block title-on-dark title-xs"
                  style={{ marginBottom: 10 }}
                >
                  <span className="bottom-title" />
                </div>
                <ul style={{ marginLeft: 20 }}>
                  <li>
                    <a href="emploi.html">Opportunités d'emploi</a>
                  </li>
                  <li>
                    <a href="telechargement.html">Téléchargements</a>
                  </li>
                  <li>
                    <a href="emploi.html">Autre lien</a>
                  </li>
                  <li>
                    <a href="emploi.html">Autre lien</a>
                  </li>
                  <li>
                    <a href="emploi.html">Autre lien</a>
                  </li>
                </ul>
                <p />
              </div>
            </div>
            <div className="col-md-4 bg-lighten-theme">
              <div
                className="widget widget-footer widget-footer-hours"
                style={{ padding: "30px 0px !important" }}
              >
                <div
                  className="title-block title-on-dark title-xs"
                  style={{ marginBottom: 10 }}
                >
                  <h4>Contacts</h4>
                  <span className="bottom-title" />
                </div>
                <ul style={{ marginLeft: 20 }}>
                  <li>
                    <a href="">Immeuble du PATRONAT 3eme étage</a>
                  </li>
                  <li>
                    <a href="">Hamdallaye ACI 2000</a>
                  </li>
                  <li>
                    <a href="">Tél : +223 20 29 29 72 </a>
                  </li>
                  <li>
                    <a href="">Tél : +223 20 29 41 19</a>
                  </li>
                  <li>
                    <a href="">Fax : +223 20 29 29 75</a>
                  </li>
                  <li>
                    <a href="">BPE : E2477</a>
                  </li>
                  <li>
                    <a href="">sgi@sgimali.com</a>
                  </li>
                </ul>
<div
                  className="title-block title-on-dark title-xs"
                  style={{ marginBottom: 10 }}
                >
                  <h4>Heure d'ouverture</h4>
                  <span className="bottom-title" />
                </div>
                <ul style={{ marginLeft: 0, listStyle: 'none', padding: 0 }}>
  <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
    <span style={{ fontWeight: 'bold' }}>Lundi - Vendredi</span>
    <span>7H30 - 17H30</span>
  </li>
  <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
    <span style={{ fontWeight: 'bold' }}>Samedi</span>
    <span>9H30 - 12H00</span>
  </li>
</ul>


              </div>
            </div>
            <div className="col-md-4 ">
              <div
                className="widget widget-footer widget-footer-subcri"
                style={{ padding: "30px 0px !important" }}
              >
                <div
                  className="title-block title-on-dark title-xs"
                  style={{ marginBottom: 10 }}
                >
                  <h4>Newsletter</h4>
                  <span className="bottom-title" />
                </div>
                <p style={{ fontSize: 14 }}>
                  Abonnez-vous à notre newsletter pour les dernières mises à
                  jours sur notre entreprise
                </p>
                <form className="form-subcri-footer">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      style={{ fontSize: 14 }}
                      placeholder="Votre Email"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-subcri-footer"
                    style={{ fontSize: 15 }}
                  >
                    s'inscrire
                  </button>
                </form>
                <br />
                <div
                  className="title-block title-on-dark title-xs"
                  style={{ marginBottom: 10 }}
                >
                  <h4>Réseaux sociaux</h4>
                  <span className="bottom-title" />
                </div>
                <ul className="widget widget-footer widget-footer-social-1">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-whatsapp" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-x-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <>
        <section
          className="no-padding cr-h1 cr-h10"
          style={{ backgroundColor: "hsl(197.71deg 100% 44.51%)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="copyright-warp cr-1">
                  <div className="copyright-list-link">
                    <ul style={{marginBottom:-20}}>
                      <li>
                        <a
                          style={{
                            color: "white",
                            fontWeight: 600,
                            fontSize: 14,
                          }}
                          href="#"
                        >
                          Accueil{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          style={{
                            color: "white",
                            fontWeight: 600,
                            fontSize: 14,
                          }}
                          href="#"
                        >
                          SGI Mali{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          style={{
                            color: "white",
                            fontWeight: 600,
                            fontSize: 14,
                          }}
                          href="#"
                        >
                          Nos Services
                        </a>
                      </li>
                      <li>
                        <a
                          style={{
                            color: "white",
                            fontWeight: 600,
                            fontSize: 14,
                          }}
                          href="#"
                        >
                          Notre Actualité{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          style={{
                            color: "white",
                            fontWeight: 600,
                            fontSize: 14,
                          }}
                          href="#"
                        >
                          Nos Publications
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="copyright-text"
                    style={{ color: "white", fontWeight: 600 }}
                  >
                    <p
                      style={{ color: "white", fontSize: 13, fontWeight: 600 }}
                    >
                      © 2023 -{" "}
                      <span style={{ color: "white", fontWeight: 600 }}>
                        Developpé par CYNOMEDIA
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /copyright */}
      </>

      <a id="to-the-top" className="fixbtt bg-hover-theme">
        <i className="fa fa-chevron-up"></i>
      </a>
   

   
      {/* Inclusion de tous les scripts nécessaires avec next/script */}
         {/* jQuery and Bootstrap */}
         <Script src="/js/vendor/jquery.min.js" strategy="beforeInteractive" />
         <Script src="/js/vendor/bootstrap.js" strategy="beforeInteractive" />
        
        {/* Mobile Menu */}
        <Script src="/js/plugins/jquery.mmenu.all.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins/mobilemenu.js" strategy="afterInteractive" />

        {/* Revolution Slider */}
      <Script src="/revolution/js/jquery.themepunch.tools.min.js" strategy="afterInteractive" />
      <Script src="/revolution/js/jquery.themepunch.revolution.min.js" strategy="afterInteractive" />
      <Script src="/revolution/js/extensions/revolution.extension.actions.min.js" strategy="afterInteractive" />
      <Script src="/revolution/js/extensions/revolution.extension.carousel.min.js" strategy="afterInteractive" />
      <Script src="/revolution/js/extensions/revolution.extension.kenburn.min.js" strategy="afterInteractive" />
      <Script src="/revolution/js/extensions/revolution.extension.layeranimation.min.js" strategy="afterInteractive" />
      <Script src="/revolution/js/extensions/revolution.extension.migration.min.js" strategy="afterInteractive" />
      <Script src="/revolution/js/extensions/revolution.extension.navigation.min.js" strategy="afterInteractive" />
      <Script src="/revolution/js/extensions/revolution.extension.parallax.min.js" strategy="afterInteractive" />
      <Script src="/revolution/js/extensions/revolution.extension.slideanims.min.js" strategy="afterInteractive" />
      <Script src="/revolution/js/extensions/revolution.extension.video.min.js" strategy="afterInteractive" />

      {/* Slider Home */}
      <Script src="/js/plugins/slider-home-7.js" strategy="afterInteractive" />

      {/* Owl Carousel */}
      <Script src="/js/plugins/owl.carousel.js" strategy="afterInteractive" />
      <Script src="/js/plugins/owl.js" strategy="afterInteractive" />

      {/* Preload */}
      {/* <Script src="/js/plugins/royal_preloader.js" strategy="afterInteractive" /> */}

      {/* Parallax */}
      <Script src="/js/plugins/jquery.parallax-1.1.3.js" strategy="afterInteractive" />

      {/* Fancy Select */}
      <Script src="/js/plugins/fancySelect.js" strategy="afterInteractive" />
      <Script src="/js/plugins/lang-select.js" strategy="afterInteractive" />
      <Script src="/js/plugins/cb-select.js" strategy="afterInteractive" />

      {/* Counter Up */}
      <Script src="/js/plugins/jquery.counterup.min.js" strategy="afterInteractive" />
      <Script src="/js/plugins/counterup.js" strategy="afterInteractive" />

      {/* Magnific Popup */}
      <Script src="/js/plugins/jquery.magnific-popup.min.js" strategy="afterInteractive" />
      <Script src="/js/plugins/lightbox.js" strategy="afterInteractive" />

      {/* Twitter */}
      <Script src="/js/plugins/twitterFetcher.js" strategy="afterInteractive" />
      <Script src="/js/plugins/tweets-footer.js" strategy="afterInteractive" />

      {/* Global JS */}
      <Script src="/js/plugins/template.js" strategy="afterInteractive" />

    {/* Demo Switcher */}
    <Script src="/switcher/demo.js" strategy="afterInteractive" />
      
    </>
  );
}
