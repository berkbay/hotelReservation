import * as React from "react";

import ButtonCard from "../../components/ButtonCard";
import Header from "../../components/Header";
import { themeColor } from "../../utils/styles";

export const HomeScreen = () => {
  return (
    <>
      <Header title="Anasayfa" leftButtonHide />
      <ButtonCard
        iconName="person-circle-outline"
        title="Profil"
        content="Kişisel bilgilerinizi görüntülemek için Profil sayfasını ziyaret edebilirsiniz."
      />
      <ButtonCard
        iconName="book-outline"
        title="Rezervasyonlarım"
        content="Geçmiş rezervasyonlarınızı görüntülemek için rezervasyonlarım sayfasını ziyaret edebilirsiniz."
        buttonColor={themeColor.darkerBlue}
      />
      <ButtonCard
        iconName="person-circle-outline"
        title="Oteller"
        content="Otelleri görüntülemek için oteller sayfasını ziyaret edebilirsiniz."
        buttonColor={themeColor.darkerGrey}
      />
    </>
  );
};
