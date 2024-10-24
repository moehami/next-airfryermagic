

export default function ContactusSection() {
  return (

<section
    data-bs-version="5.1"
    className="form5 cid-uryiHimeIg"
    id="contact-form-3-uryiHimeIg"
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 content-head">
          <div className="mbr-section-head mb-5">
            <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
              <strong>Get in Touch!</strong>
            </h3>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
          <form
            action="#"
            method="POST"
            className="mbr-form form-with-styler"
            data-form-title="Form Name"
          >
            <input
              type="hidden"
              name="email"
              data-form-email="true"
              defaultValue="AqfV1RrbB26pSV35I5IMQnPpHL7aEPM9kw135xh67t9dT4lwzA7Ok0TazZmf/9RZYb6W7SjMC90mswz6S/lRYJp+YBZFTAajzIz+tKvitCc9lybt7FLOLZXilAw3Jz9l"
            />
            <div className="row">
              <div
                hidden="hidden"
                data-form-alert=""
                className="alert alert-success col-12"
              >
                Thanks for filling out the form!
              </div>
              <div
                hidden="hidden"
                data-form-alert-danger=""
                className="alert alert-danger col-12"
              >
                Oops...! some problem!
              </div>
            </div>
            <div className="dragArea row">
              <div className="col-md col-sm-12 form-group mb-3" data-for="name">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  data-form-field="name"
                  className="form-control"
                  defaultValue=""
                  id="name-contact-form-3-uryiHimeIg"
                />
              </div>
              <div
                className="col-md col-sm-12 form-group mb-3"
                data-for="email"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  data-form-field="email"
                  className="form-control"
                  defaultValue=""
                  id="email-contact-form-3-uryiHimeIg"
                />
              </div>
              <div className="col-12 form-group mb-3 mb-3" data-for="url">
                <input
                  type="url"
                  name="url"
                  placeholder="Phone"
                  data-form-field="url"
                  className="form-control"
                  defaultValue=""
                  id="url-contact-form-3-uryiHimeIg"
                />
              </div>
              <div className="col-12 form-group mb-3" data-for="textarea">
                <textarea
                  name="textarea"
                  placeholder="Message"
                  data-form-field="textarea"
                  className="form-control"
                  id="textarea-contact-form-3-uryiHimeIg"
                  defaultValue={""}
                />
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 align-center mbr-section-btn">
                <button type="submit" className="btn btn-primary display-7">
                  Send It!
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
    );
}
