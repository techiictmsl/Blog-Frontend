import React from "react";
import Modal from "react-modal";
import { MdClear, MdDone } from "react-icons/md";
import {
  ModalHead,
  ModalTitle,
  Banner,
  BannerWrapepr,
  Text,
  CloseButton,
  ActionButtonWrapper,
} from "./ModalStyles";
Modal.setAppElement("#root");

const customStyles = {
  content: {
    // width: "90%",
    // margin: "0 auto",
    // top: "50%",
    // left: "50%",
    // right: "auto",
    // bottom: "auto",
    // marginRight: "-50%",
    // transform: "translate(-50%, -50%)",
  },
};

function ModalAdmin({
  heading,
  modalIsOpen,
  afterOpenModal,
  closeModal,
  subtitle,
}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalHead>
        <div className="avatarWrapper">
          <img
            src="https://100k-faces.glitch.me/random-image"
            className="avatar"
            alt="avatar"
          />
          <div className="nameAndDesignation">
            <p className="name">Vikas Kumar Saw</p>
            <p className="designation">Android developer</p>
          </div>
        </div>
        <div className="socialWrapper">
          <img
            src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
            alt="facebook"
            className="socialIcon"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/145/145812.png"
            alt="twitter"
            className="socialIcon"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
            alt="linkedin"
            className="socialIcon"
          />
        </div>
      </ModalHead>
      <ModalTitle>{heading}</ModalTitle>
      {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
      <BannerWrapepr>
        <Banner
          src="https://source.unsplash.com/random"
          alt="banner"
          className="banner"
        />
      </BannerWrapepr>
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint fugit
        pariatur temporibus veritatis eligendi ab assumenda saepe at nostrum
        sequi numquam eaque consectetur odio voluptates enim ratione blanditiis
        placeat, optio aspernatur, vel error ea quam quos! Facilis
        necessitatibus eveniet voluptate quae! Harum officiis possimus
        distinctio tempora maxime. Corrupti temporibus officiis voluptas
        consequatur veniam vel! Ea, officiis ut modi incidunt nostrum odio non
        obcaecati dignissimos itaque aperiam tempora doloremque suscipit
        doloribus consequuntur enim quidem id animi maxime! Cum doloribus,
        quibusdam quae eveniet iste illo voluptates, omnis magnam odio sed
        reprehenderit sequi veniam error earum nulla harum exercitationem beatae
        corrupti? Porro dolorum expedita explicabo reiciendis. Id facere enim
        aliquid repellendus repellat dignissimos, dolores a reprehenderit
        mollitia minima placeat ratione fugiat veritatis consequuntur eveniet
        quos possimus odio ad distinctio qui nam tenetur! Optio eum rem
        repudiandae minima nesciunt commodi soluta, quae delectus. Dignissimos
        culpa sunt debitis. Facere ipsa nostrum iusto impedit molestiae
        repudiandae obcaecati eius rem expedita, pariatur repellendus, corrupti
        aspernatur totam esse ducimus, nam itaque sint reprehenderit eligendi.
        Debitis consequuntur quis animi? Amet dolorum nam ex hic libero,
        incidunt quod reprehenderit doloribus minima mollitia illo dolores,
        repellendus exercitationem quaerat perferendis debitis doloremque qui
        voluptatum? Perspiciatis,
        <br />
        <br /> dignissimos tempore. Commodi accusamus distinctio debitis, optio
        esse labore fugit earum tempora modi unde voluptatum cum quod officiis.
        Et, voluptatum odit ab nam modi sunt dolore corrupti, autem, veritatis
        odio fugiat velit possimus! Provident, nam aspernatur maiores
        necessitatibus esse laboriosam, eveniet ducimus possimus minus est
        corrupti molestiae accusantium dolorum quibusdam consequuntur? Mollitia
        quo cumque expedita minus reprehenderit incidunt aliquid officiis iusto
        veniam. Modi totam nihil quae quas dolorem quos dolorum laudantium
        incidunt, deleniti corporis sint ut officia ipsam quam dolore. Quis
        consectetur impedit quos perferendis id ipsa sapiente, quas, maiores
        eaque saepe repellendus dolorem tenetur ipsum fugit temporibus iste
        eveniet. Dicta, dolorem asperiores! Velit et sapiente quo. Ipsa modi cum
        eaque placeat laboriosam alias quis nam saepe magnam sequi aperiam quam
        molestiae vel, laborum iste voluptate fugit repudiandae. Excepturi at
        ducimus exercitationem aperiam ullam rem quis, nulla accusamus
        <br />
        <br />
        praesentium. Aliquid atque a et ut adipisci libero totam neque excepturi
        voluptatum molestiae nisi perspiciatis quis assumenda reiciendis iure
        repellat animi, omnis itaque quae unde. Dolor, asperiores eos. Illo
        dolorem saepe repudiandae quaerat distinctio suscipit similique dolore
        ipsum soluta voluptatibus, nisi pariatur vero officia sunt ipsam in
        consequatur eos molestias esse fugit! Dolorum ipsam recusandae esse ad
        quia eius nulla amet ullam animi illo quam a odit exercitationem cum
        nobis consequuntur, obcaecati dicta, autem praesentium tenetur earum
        placeat quod laudantium velit. Natus libero explicabo repellat ipsum aut
        enim inventore eos aperiam repellendus sequi pariatur, illum nostrum
        consectetur placeat veritatis esse voluptates excepturi facere corrupti
        quia cupiditate assumenda minus rerum quam. Optio, nam? Perferendis,
        doloremque porro exercitationem tenetur laudantium eligendi veniam
        culpa! Illo ut nobis illum, numquam non rerum quidem! Modi ullam aliquid
        est vero sequi. Officiis mollitia
        <br />
        <br /> qui alias ullam, molestiae quo delectus similique magni iure
        doloribus omnis? Corporis delectus sunt ullam mollitia cum nisi
        architecto saepe animi repellat suscipit, praesentium tempora, soluta
        veritatis nihil blanditiis asperiores deserunt expedita illum recusandae
        quidem enim! Sit molestiae provident dolore corporis dignissimos
        corrupti labore in, doloribus iure facilis at nesciunt cupiditate
        delectus, similique voluptatibus illo consectetur. Minima ducimus
        deserunt in minus ea aut quibusdam aliquam laborum ipsum ratione. Ullam
        sapiente cum reprehenderit fuga voluptatem voluptate pariatur, quisquam
        consequatur nulla provident dicta modi! Explicabo debitis exercitationem
        vitae natus soluta? Nisi non id quasi dolorem esse voluptates similique
        facere nam iure impedit in est soluta consectetur totam iste illo,
        officiis nulla. Et culpa tenetur laudantium cupiditate sed quisquam
        veniam itaque, illo repellat ut laborum eius nam porro totam tempora
        possimus aliquam explicabo accusantium ipsa.
      </Text>
      {/* <button onClick={closeModal}>close</button> */}
      <CloseButton onClick={closeModal}>
        <p>
          <MdClear />
        </p>
      </CloseButton>
      <ActionButtonWrapper>
        <div className="accept">
          <MdDone />
          <p>ACCEPT</p>
        </div>
        <div className="reject">
          <MdClear />
          <p>REJECT</p>
        </div>
      </ActionButtonWrapper>
      {/* <div>I am a modal</div> */}
    </Modal>
  );
}

export default ModalAdmin;
