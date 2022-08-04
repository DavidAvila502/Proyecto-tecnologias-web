import React from "react";
import SectionTitle from "../../../../../Components/SectionTitle/SectionTitle";
import "./Contacto.css";

import { useGeneralContext } from "../../../../../Context/GenearlContext";
const Contacto = () => {
  const datos = useGeneralContext();
  let contactoData = datos.mainData.Contacto;

  return (
    <section className="contacto" id="seccion_contacto">
      <section className="formulario_contacto">
        <div className="contacto_content">
          <div className="formContacto">
            <SectionTitle
              title={contactoData.titulo}
              color="white"
              css_class="mt_25 mb_13"
            />

            <h3 className="sectionSubtitle quicksand fw_700">
              {contactoData.subtitulo}
            </h3>

            <form className="realForm mt_56">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <p className="label_entrada">
                        {contactoData.Campo[0].titulo}
                      </p>
                      <input
                        placeholder={contactoData.Campo[0].placeholder}
                        className="form_entrada quicksand fw_700 mr_85 mt_8"
                      />
                    </td>
                    <td>
                      <p className="label_entrada">
                        {contactoData.Campo[1].titulo}
                      </p>
                      <input
                        type={"text"}
                        placeholder={contactoData.Campo[1].placeholder}
                        className="form_entrada quicksand fw_700  mt_8"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td colSpan={"2"}>
                      <p className="label_entrada mt_70">
                        {contactoData.Campo[2].titulo}
                      </p>
                      <input
                        type={"text"}
                        placeholder={contactoData.Campo[2].placeholder}
                        className="form_entrada form_entrada_m quicksand fw_700  mt_8"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td colSpan={"2"}>
                      <div className="boton_form_container">
                        <input
                          value={contactoData.boton}
                          type={"button"}
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
          <img
            src={`http://localhost:1337${contactoData.icono_contacto.data.attributes.url}`}
            alt="Contacto"
          />
        </div>
      </div>
    </section>
  );
};

export default Contacto;
