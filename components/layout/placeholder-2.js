import Image from 'next/image';

const Placeholder2 = () => {
  return (
    <section id="placeholder--2">
      <div className="container-fluid--2 fb-row">
        <div className="text">
          <h2>Outplay the Competition</h2>

          <p>
            Experience a 40% boost in computing from last generation. MSI
            Desktop equips the 10th Gen. Intel® Core™ i7 processor with the
            upmost computing power to bring you an unparalleled gaming
            experience.
            <br />
            <br />
            *Performance compared to i7-10500. Specs varies by model.
          </p>
        </div>

        <div className="image-container">
          <Image
            src="/images/outplay-competition.jpg"
            width={963}
            height={681}
            priority
          />
          <div className="overlay" />
        </div>
      </div>
    </section>
  );
};

export default Placeholder2;
