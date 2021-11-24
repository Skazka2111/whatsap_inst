import { useState, Fragment } from "react";
import landing from "./assets/img/landing.jpg";
import copy from "./assets/img/copy.png";

// Импорты всех картинок
import vk from "./assets/img/vk.png";
import telegram from "./assets/img/telegram.png";
import instagram from "./assets/img/instagram.png";
import instagramWhite from "./assets/img/instagram_white.png";
import facebook from "./assets/img/facebook.png";
import ok from "./assets/img/ok.png";
import viber from "./assets/img/viber.png";
import whatsapp from "./assets/img/whatsapp.png";

function App() {
    const [currentPage, setCurrentPage] = useState(0);
    const [copied, setCopied] = useState(false);

    const utm_medium =
        new URLSearchParams(window.location.search).get("utm_medium") ?? 32099646;
    const promokod =
        new URLSearchParams(window.location.search).get("promokod") ??
        "pkrskljdga354";

    return (
        <div className="application">
            <div className="mainBlock">
                {currentPage === 0 && (
                    <Fragment>
                        <img src={landing} alt="landing" className="landingPicture" />
                        <div className="blockTexts">
                            <h2 className="title">Продажи через переписки</h2>
                            <p>
                                ОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписание
                            </p>
                            <a href={`https://vk.com/app5898182_-196295046#s=1471896&utm_medium=${utm_medium}`} target={"_blank"} className="linkWithImage" rel="noreferrer">
                                <img className="linkImage" src={vk} alt="ВКонтакте" />
                            </a>
                            <a href={`https://t.me/Infoproducer_Bot?ref=${utm_medium}`} target="_blank" className="linkWithImage" rel="noreferrer">
                                <img className="linkImage" src={telegram} alt="Telegram" />
                            </a>
                            <a href="#" target="_blank" className="linkWithImage" rel="noreferrer">
                                <img className="linkImage" src={facebook} alt="Facebook" />
                            </a>
                            <a href="#" target="_blank" className="linkWithImage" rel="noreferrer">
                                <img className="linkImage" src={ok} alt="Odnoklassniki" />
                            </a>
                            <a href="#" target="_blank" className="linkWithImage" rel="noreferrer">
                                <img className="linkImage" src={viber} alt="Viber" />
                            </a>
                            <span
                                className={"linkWithImage tap"}
                                onClick={() => setCurrentPage(2)}
                            >
                <img className="linkImage" src={whatsapp} alt="Whatsapp" />
              </span>
                            <span
                                className={"linkWithImage tap"}
                                onClick={() => setCurrentPage(1)}
                            >
                <img className="linkImage" src={instagram} alt="Instagram" />
              </span>
                        </div>
                    </Fragment>
                )}
                {currentPage === 1 &&
                <Fragment>
                    <img src={landing} alt="landing" className="landingPicture"/>
                    <div className="blockTexts">
                        <h2 className="title">Instagram</h2>
                        <p>
                            Нажмите на кнопку ниже и у Вас автоматически скопируется Ваш код
                            в буфер обмена, затем переходите в профиль Instagram, открывайте
                            директ и отправляйте скопированный текст.
                        </p>
                        <div className="inputZone">
                            <input
                                className="promokodInput"
                                readOnly={true}
                                value={copied ? "Скопировано!" : "Мой промокод " + promokod}
                            />
                            <button
                                className="copyButton tap"
                                onClick={() => {
                                    navigator.clipboard.writeText("Мой промокод " + promokod).then(() => {
                                        setCopied(true);
                                        setTimeout(() => {
                                            setCopied(false);
                                        }, 1000);
                                    })
                                }}
                            >
                                <img src={copy} alt={"copy icon"}/>
                            </button>
                        </div>
                        <div className="instagramLink">
                            <a
                                href={"https://instagram.com/zelenminions"}
                                target={"_blank"}
                                className="instagramLinkButton" rel="noreferrer"
                            >
                                <img
                                    className="instagramLinkButtonImage"
                                    src={instagramWhite}
                                    alt="Instagram"
                                />{" "}
                                Перейти в профиль
                            </a>
                        </div>
                        <span className="tap" onClick={() => setCurrentPage(0)}>
                Вернуться назад
              </span>
                    </div>
                </Fragment>
                }
                {currentPage === 2 &&
                <Fragment>
                    <img src={landing} alt="landing" className="landingPicture" />
                    <div className="blockTexts">
                        <h2 className="title">Whatsapp</h2>
                        <p>
                            Описание для ватсапа
                        </p>
                        <div className="inputZone">
                            <input
                                className="promokodInput"
                                readOnly={true}
                                value={copied ? "Скопировано!" : "Мой промокод " + promokod}
                            />
                            <button
                                className="copyButton whatsAppColor whatsAppBorder tap"
                                onClick={() => {
                                    navigator.clipboard.writeText("Мой промокод " + promokod).then(() => {
                                        setCopied(true);
                                        setTimeout(() => {
                                            setCopied(false);
                                        }, 1000);
                                    })
                                }}
                            >
                                <img src={copy} alt={"copy icon"} />
                            </button>
                        </div>
                        <div className="instagramLink">
                            <a
                                href={"https://whatsapp.com/zelenminions"}
                                target={"_blank"}
                                className="instagramLinkButton whatsAppColor whatsAppBorder" rel="noreferrer"
                            >
                                <img
                                    className="instagramLinkButtonImage"
                                    src={whatsapp}
                                    alt="Instagram"
                                />{" "}
                                Написать
                            </a>
                        </div>
                        <span className="tap" onClick={() => setCurrentPage(0)}>
                Вернуться назад
              </span>
                    </div>
                </Fragment>
                    }
            </div>
        </div>
    );
}

export default App;
