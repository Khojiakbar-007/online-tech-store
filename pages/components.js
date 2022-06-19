import AdvertisingCard from "../components/advertising-card";
import ProductCard from "../components/product-card";
import Carousel from "../components/carousel";

const data = [
  {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/b5fa/f3c0/0975494fb195cf5a0f3fc873c2ea6c49?Expires=1656288000&Signature=c7Xne8LMZYa0VCH3HaSpd4A6CxObj4rbB9zUG5rlM1GV89KJgowE3x0IPf4MF04Thmn2p7Xxic8ysRNPfMnAxsGeSsNKp9W7YndgpG9q52L7e89bW02c9r6KOUEpgZ-mbqeUCe9b43Ho575AX6IraAdehfLN2C7Ku5VN0JShVciHPSlcm8~QmtqqdViWFoOtw5jLZs~tXfs2siXf~FPzMFB89s-RAqlKVCj1tg~Dz6Ax0Aamb1-~WCX9YQBK7F3GRjUlvpBR5JwbimAIen8Vs6hyIrp25-otLCR53LXpk731Z5sPOkjI71YIuFmD7eHp0vOIFb5EywRyUwfqm4xo8Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    rating: 5,
    title:
      "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Flex-036AU 15.6 MULTITOUCH All-In-On",
    nowPrise: "$519",
    oldPrise: "$499",
    like: true,
  },
  {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/1066/0652/b552a8202c1f0cffc8c672a0b5936ec7?Expires=1656288000&Signature=G8LB8OhS-uLrC60pFwJg15jhJ2qH7mnChXZaH-~XRDEdFOcUD8KSe7FZ6Xc4zR-QrzkE--7Vv0i3SQ5DYTTmEOiEgFmcPam6gPh2hLmkdq6J2tlGZzCOdS0MurHju5liFEOzLgD-mE5zXxtfWtg~HmvfqLQkneqrJIWiUFVY-Bv-fGbo~uqFD6DrBy~eo7QgDfBow7b507mXYTgB~s866tv3wCXRvos3zTDHdgfiCpLocEMnhZYDXAj2zLUM8CyAll6v3D6PSGTJaE64PlgY5l~GibM9O7qSSUlW2Rwz-hduSGMNPz-gFkOu-uqGq04KQGNQ-xSKkGTNath8Q6ewPg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    rating: 3,
    title:
      "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Flex-036AU 15.6 MULTITOUCH All-In-On",
    nowPrise: "$519",
    oldPrise: "$499",
    like: true,
  },
  {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/7f48/af8b/d4dd6fbf89d22ebb192709dd14efefac?Expires=1656288000&Signature=Ngd4vBDqkej0VgIv0nB3F39ClK8lZMcm8fw5U4eptvk-NvW0RSpzADFpL0dsUaevSF7grSZhwC5C~4RfK1C-TMM0ekaijCimqCjgaEmNBozzvARqsY7GLH~jukJ4Js~DcNo6Lep2EDiwmLUuYgOGLfMbLVRkp7UShrSAzpbHuw61r-5IU90xFKmNqKTLScArc0xCpbfhO8iajsqTwTniPQoKLfUM52foydMrj2ydAuzVXrAgak9-JAkVoCrse9ZQ89LFExu3Z483y1lKqmbWxplRrVv998nfLVGBNHl40eaTIXh3bKj095Mkbww6g4mk78DBEumcXX11P8UtTy0gGA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    rating: 2,
    title:
      "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Flex-036AU 15.6 MULTITOUCH All-In-On",
    nowPrise: "$519",
    oldPrise: "$499",
    like: true,
  },
  {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/311e/d4d2/0360cf6106a06973d17e8ba1ce579c8e?Expires=1656288000&Signature=AO5xF3~PhXwa8wtcNgvpbL-ugvi~-GAs-z~6jc9S5L9UL6CgsY70ajEjC7S8hMwIs45GvTyqlHKwKVsJzQokb92g1OYaHgka7JbyDkI4jIJPPojdPuyXHhfhL83d7wS5c0TxWJAi~OoL51Z1gPP9xPYyxvS6GmJByiju3-onOCbsPme8KkPTZj6W1YcnqoovnDL1psOYbEBtwHOsF96BzT3Dpo7Q5BHU-IHSnaWETbZinTOzxK4jZPKjHNP4FR36NikStUxCoXkqiHv113k9lJeA~vpDifyDGGdFXOdvSUf4BHf80UV~UI4eZJNMNff9G9pVP6dz1FcnhD5gJO2FZQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    rating: 4,
    title:
      "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Flex-036AU 15.6 MULTITOUCH All-In-On",
    nowPrise: "$519",
    oldPrise: "$499",
    like: true,
  },
  {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/b5fa/f3c0/0975494fb195cf5a0f3fc873c2ea6c49?Expires=1656288000&Signature=c7Xne8LMZYa0VCH3HaSpd4A6CxObj4rbB9zUG5rlM1GV89KJgowE3x0IPf4MF04Thmn2p7Xxic8ysRNPfMnAxsGeSsNKp9W7YndgpG9q52L7e89bW02c9r6KOUEpgZ-mbqeUCe9b43Ho575AX6IraAdehfLN2C7Ku5VN0JShVciHPSlcm8~QmtqqdViWFoOtw5jLZs~tXfs2siXf~FPzMFB89s-RAqlKVCj1tg~Dz6Ax0Aamb1-~WCX9YQBK7F3GRjUlvpBR5JwbimAIen8Vs6hyIrp25-otLCR53LXpk731Z5sPOkjI71YIuFmD7eHp0vOIFb5EywRyUwfqm4xo8Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    rating: 5,
    title:
      "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Flex-036AU 15.6 MULTITOUCH All-In-On",
    nowPrise: "$519",
    oldPrise: "$499",
    like: true,
  },
  {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/1066/0652/b552a8202c1f0cffc8c672a0b5936ec7?Expires=1656288000&Signature=G8LB8OhS-uLrC60pFwJg15jhJ2qH7mnChXZaH-~XRDEdFOcUD8KSe7FZ6Xc4zR-QrzkE--7Vv0i3SQ5DYTTmEOiEgFmcPam6gPh2hLmkdq6J2tlGZzCOdS0MurHju5liFEOzLgD-mE5zXxtfWtg~HmvfqLQkneqrJIWiUFVY-Bv-fGbo~uqFD6DrBy~eo7QgDfBow7b507mXYTgB~s866tv3wCXRvos3zTDHdgfiCpLocEMnhZYDXAj2zLUM8CyAll6v3D6PSGTJaE64PlgY5l~GibM9O7qSSUlW2Rwz-hduSGMNPz-gFkOu-uqGq04KQGNQ-xSKkGTNath8Q6ewPg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    rating: 3,
    title:
      "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Flex-036AU 15.6 MULTITOUCH All-In-On",
    nowPrise: "$519",
    oldPrise: "$499",
    like: true,
  },
  {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/7f48/af8b/d4dd6fbf89d22ebb192709dd14efefac?Expires=1656288000&Signature=Ngd4vBDqkej0VgIv0nB3F39ClK8lZMcm8fw5U4eptvk-NvW0RSpzADFpL0dsUaevSF7grSZhwC5C~4RfK1C-TMM0ekaijCimqCjgaEmNBozzvARqsY7GLH~jukJ4Js~DcNo6Lep2EDiwmLUuYgOGLfMbLVRkp7UShrSAzpbHuw61r-5IU90xFKmNqKTLScArc0xCpbfhO8iajsqTwTniPQoKLfUM52foydMrj2ydAuzVXrAgak9-JAkVoCrse9ZQ89LFExu3Z483y1lKqmbWxplRrVv998nfLVGBNHl40eaTIXh3bKj095Mkbww6g4mk78DBEumcXX11P8UtTy0gGA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    rating: 2,
    title:
      "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Flex-036AU 15.6 MULTITOUCH All-In-On",
    nowPrise: "$519",
    oldPrise: "$499",
    like: true,
  },
  {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/311e/d4d2/0360cf6106a06973d17e8ba1ce579c8e?Expires=1656288000&Signature=AO5xF3~PhXwa8wtcNgvpbL-ugvi~-GAs-z~6jc9S5L9UL6CgsY70ajEjC7S8hMwIs45GvTyqlHKwKVsJzQokb92g1OYaHgka7JbyDkI4jIJPPojdPuyXHhfhL83d7wS5c0TxWJAi~OoL51Z1gPP9xPYyxvS6GmJByiju3-onOCbsPme8KkPTZj6W1YcnqoovnDL1psOYbEBtwHOsF96BzT3Dpo7Q5BHU-IHSnaWETbZinTOzxK4jZPKjHNP4FR36NikStUxCoXkqiHv113k9lJeA~vpDifyDGGdFXOdvSUf4BHf80UV~UI4eZJNMNff9G9pVP6dz1FcnhD5gJO2FZQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    rating: 4,
    title:
      "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Flex-036AU 15.6 MULTITOUCH All-In-On",
    nowPrise: "$519",
    oldPrise: "$499",
    like: true,
  },
  {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/b5fa/f3c0/0975494fb195cf5a0f3fc873c2ea6c49?Expires=1656288000&Signature=c7Xne8LMZYa0VCH3HaSpd4A6CxObj4rbB9zUG5rlM1GV89KJgowE3x0IPf4MF04Thmn2p7Xxic8ysRNPfMnAxsGeSsNKp9W7YndgpG9q52L7e89bW02c9r6KOUEpgZ-mbqeUCe9b43Ho575AX6IraAdehfLN2C7Ku5VN0JShVciHPSlcm8~QmtqqdViWFoOtw5jLZs~tXfs2siXf~FPzMFB89s-RAqlKVCj1tg~Dz6Ax0Aamb1-~WCX9YQBK7F3GRjUlvpBR5JwbimAIen8Vs6hyIrp25-otLCR53LXpk731Z5sPOkjI71YIuFmD7eHp0vOIFb5EywRyUwfqm4xo8Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    rating: 5,
    title:
      "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Flex-036AU 15.6 MULTITOUCH All-In-On",
    nowPrise: "$519",
    oldPrise: "$499",
    like: true,
  },
  {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/1066/0652/b552a8202c1f0cffc8c672a0b5936ec7?Expires=1656288000&Signature=G8LB8OhS-uLrC60pFwJg15jhJ2qH7mnChXZaH-~XRDEdFOcUD8KSe7FZ6Xc4zR-QrzkE--7Vv0i3SQ5DYTTmEOiEgFmcPam6gPh2hLmkdq6J2tlGZzCOdS0MurHju5liFEOzLgD-mE5zXxtfWtg~HmvfqLQkneqrJIWiUFVY-Bv-fGbo~uqFD6DrBy~eo7QgDfBow7b507mXYTgB~s866tv3wCXRvos3zTDHdgfiCpLocEMnhZYDXAj2zLUM8CyAll6v3D6PSGTJaE64PlgY5l~GibM9O7qSSUlW2Rwz-hduSGMNPz-gFkOu-uqGq04KQGNQ-xSKkGTNath8Q6ewPg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    rating: 3,
    title:
      "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Flex-036AU 15.6 MULTITOUCH All-In-On",
    nowPrise: "$519",
    oldPrise: "$499",
    like: true,
  },
  {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/7f48/af8b/d4dd6fbf89d22ebb192709dd14efefac?Expires=1656288000&Signature=Ngd4vBDqkej0VgIv0nB3F39ClK8lZMcm8fw5U4eptvk-NvW0RSpzADFpL0dsUaevSF7grSZhwC5C~4RfK1C-TMM0ekaijCimqCjgaEmNBozzvARqsY7GLH~jukJ4Js~DcNo6Lep2EDiwmLUuYgOGLfMbLVRkp7UShrSAzpbHuw61r-5IU90xFKmNqKTLScArc0xCpbfhO8iajsqTwTniPQoKLfUM52foydMrj2ydAuzVXrAgak9-JAkVoCrse9ZQ89LFExu3Z483y1lKqmbWxplRrVv998nfLVGBNHl40eaTIXh3bKj095Mkbww6g4mk78DBEumcXX11P8UtTy0gGA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    rating: 2,
    title:
      "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Flex-036AU 15.6 MULTITOUCH All-In-On",
    nowPrise: "$519",
    oldPrise: "$499",
    like: true,
  },
  {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/311e/d4d2/0360cf6106a06973d17e8ba1ce579c8e?Expires=1656288000&Signature=AO5xF3~PhXwa8wtcNgvpbL-ugvi~-GAs-z~6jc9S5L9UL6CgsY70ajEjC7S8hMwIs45GvTyqlHKwKVsJzQokb92g1OYaHgka7JbyDkI4jIJPPojdPuyXHhfhL83d7wS5c0TxWJAi~OoL51Z1gPP9xPYyxvS6GmJByiju3-onOCbsPme8KkPTZj6W1YcnqoovnDL1psOYbEBtwHOsF96BzT3Dpo7Q5BHU-IHSnaWETbZinTOzxK4jZPKjHNP4FR36NikStUxCoXkqiHv113k9lJeA~vpDifyDGGdFXOdvSUf4BHf80UV~UI4eZJNMNff9G9pVP6dz1FcnhD5gJO2FZQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    rating: 4,
    title:
      "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Flex-036AU 15.6 MULTITOUCH All-In-On",
    nowPrise: "$519",
    oldPrise: "$499",
    like: true,
  },
];

function Components() {
  return (
    <>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <h2>Carousel product</h2> <br />
        <Carousel>
          {data.map((item, index) => (
            <ProductCard key={index} data={item} />
          ))}
        </Carousel>
        <h2>product</h2> <br />
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <AdvertisingCard
            imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTczduXxsw5oqMeufmIub7I6Tq_QRXP65VSew&usqp=CAU"
            title="Erkin Norimboyev"
          />
          {data.map((item, index) => (
            <ProductCard key={index} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Components;
