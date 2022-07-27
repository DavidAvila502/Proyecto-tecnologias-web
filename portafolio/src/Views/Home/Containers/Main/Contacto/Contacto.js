import React from "react";
import SectionTitle from "../../../../../Components/SectionTitle/SectionTitle";
import "./Contacto.css";
const Contacto = () => {
  return (
    <section className="contacto" id="seccion_contacto">
      <section className="formulario_contacto">
        <div className="contacto_content">
          <div className="formContacto">
            <SectionTitle
              title="Contacto"
              color="white"
              css_class="mt_25 mb_13"
            />

            <h3 className="sectionSubtitle quicksand fw_700">
              ¡Envia un mesaje!
            </h3>

            <form className="realForm mt_56">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <p className="label_entrada">Nombre</p>
                      <input
                        placeholder="Ingresa tu nombre"
                        className="form_entrada quicksand fw_700 mr_85 mt_8"
                      />
                    </td>
                    <td>
                      <p className="label_entrada">Correo</p>
                      <input
                        type={"text"}
                        placeholder="Ingresa tu correo electornico"
                        className="form_entrada quicksand fw_700  mt_8"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td colSpan={"2"}>
                      <p className="label_entrada mt_70">Mensaje</p>
                      <input
                        type={"text"}
                        placeholder="Ingresa tu mensaje"
                        className="form_entrada form_entrada_m quicksand fw_700  mt_8"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td colSpan={"2"}>
                      <div className="boton_form_container">
                        <input
                          value={"¡Enviar!"}
                          type={"button"}
                          placeholder="Ingresa tu mensaje"
                          className="mt_25 boton_form_contacto quicksand fw_700"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </section>
      <div className="formulario_imagen">
        <div className="imagen_contacto_container">
          <img src="assets/images/contacto.svg" alt="Contacto" />
        </div>
      </div>
    </section>
  );
};

export default Contacto;
