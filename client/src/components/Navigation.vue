<template>
  <div class="menu">
    <!-- <div class="menu"
    v-if="['home'].indexOf($route.name) > -1"
  > -->
    <header
      class="menu--mobile"
      v-if="['home'].indexOf($route.name) > -1"
    >
      <a
        href="https://github.com/trevorwheeler"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-duration="1000"
          width="36"
          height="37"
          viewBox="0 0 36 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="githubTitle githubDesc"
          role="img"
        >
          <title id="githubTitle">A link to a github account owned by Trevor Wheeler</title>
          <desc id="githubDesc">Github logo indicating to view Trevor Wheeler's Github account</desc>
          <path
            d="M32.1429 0.5625H3.85714C1.72768 0.5625 0 2.28418 0 4.40625V32.5938C0 34.7158 1.72768 36.4375 3.85714 36.4375H32.1429C34.2723 36.4375 36 34.7158 36 32.5938V4.40625C36 2.28418 34.2723 0.5625 32.1429 0.5625ZM22.283 31.2885C21.608 31.4086 21.3589 30.9922 21.3589 30.6479C21.3589 30.2154 21.375 28.0053 21.375 26.2195C21.375 24.9703 20.9571 24.1775 20.467 23.7611C23.4402 23.4328 26.5741 23.0244 26.5741 17.9074C26.5741 16.45 26.0518 15.7213 25.2 14.7844C25.3366 14.44 25.7946 13.0227 25.0634 11.1809C23.9464 10.8365 21.3911 12.6143 21.3911 12.6143C20.3304 12.318 19.1813 12.1658 18.0482 12.1658C16.9152 12.1658 15.7661 12.318 14.7054 12.6143C14.7054 12.6143 12.15 10.8365 11.033 11.1809C10.3018 13.0146 10.7518 14.432 10.8964 14.7844C10.0446 15.7213 9.64286 16.45 9.64286 17.9074C9.64286 23.0004 12.6402 23.4328 15.6134 23.7611C15.2277 24.1055 14.8821 24.698 14.7616 25.5469C13.9982 25.8912 12.0455 26.4838 10.8804 24.4338C10.1491 23.1686 8.83125 23.0645 8.83125 23.0645C7.52946 23.0484 8.74286 23.8813 8.74286 23.8813C9.61071 24.2816 10.2214 25.8191 10.2214 25.8191C11.0009 28.1975 14.7295 27.3967 14.7295 27.3967C14.7295 28.5098 14.7455 30.3195 14.7455 30.6479C14.7455 30.9922 14.5045 31.4086 13.8214 31.2885C8.51786 29.5188 4.80536 24.4898 4.80536 18.6121C4.80536 11.2609 10.4464 5.67949 17.8232 5.67949C25.2 5.67949 31.1786 11.2609 31.1786 18.6121C31.1866 24.4898 27.5866 29.5268 22.283 31.2885ZM14.4 26.3957C14.2473 26.4277 14.1027 26.3637 14.0866 26.2596C14.0705 26.1395 14.175 26.0354 14.3277 26.0033C14.4804 25.9873 14.625 26.0514 14.6411 26.1555C14.6652 26.2596 14.5607 26.3637 14.4 26.3957ZM13.6366 26.3236C13.6366 26.4277 13.5161 26.5158 13.3554 26.5158C13.1786 26.5318 13.058 26.4438 13.058 26.3236C13.058 26.2195 13.1786 26.1314 13.3393 26.1314C13.492 26.1154 13.6366 26.2035 13.6366 26.3236ZM12.5357 26.2355C12.5036 26.3396 12.3429 26.3877 12.2062 26.3396C12.0536 26.3076 11.9491 26.1875 11.9813 26.0834C12.0134 25.9793 12.1741 25.9313 12.3107 25.9633C12.4714 26.0113 12.5759 26.1314 12.5357 26.2355ZM11.5473 25.8031C11.475 25.8912 11.3223 25.8752 11.2018 25.7551C11.0812 25.651 11.0491 25.4988 11.1295 25.4268C11.2018 25.3387 11.3545 25.3547 11.475 25.4748C11.5795 25.5789 11.6196 25.7391 11.5473 25.8031ZM10.8161 25.0744C10.7438 25.1225 10.6071 25.0744 10.5187 24.9543C10.4304 24.8342 10.4304 24.698 10.5187 24.642C10.6071 24.5699 10.7438 24.626 10.8161 24.7461C10.9045 24.8662 10.9045 25.0104 10.8161 25.0744V25.0744ZM10.2938 24.2977C10.2214 24.3697 10.1009 24.3297 10.0125 24.2496C9.92411 24.1455 9.90804 24.0254 9.98036 23.9693C10.0527 23.8973 10.1732 23.9373 10.2616 24.0174C10.35 24.1215 10.3661 24.2416 10.2938 24.2977ZM9.75536 23.7051C9.72321 23.7771 9.61875 23.7932 9.53036 23.7371C9.42589 23.6891 9.37768 23.601 9.40982 23.5289C9.44196 23.4809 9.53036 23.4568 9.63482 23.4969C9.73929 23.5529 9.7875 23.641 9.75536 23.7051Z"
            fill="#06D6A0"
          />
        </svg>
      </a>
      <a
        href="mailto: sendtrevmail@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          data-aos="zoom-in"
          data-aos-delay="500"
          data-aos-duration="1000"
          width="36"
          height="35"
          viewBox="0 0 36 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="emailTitle emailDesc"
          role="img"
        >
          <title id="emailTitle">link to send Trevor Wheeler an email</title>
          <desc id="emailDesc">envelope image indicating to contact via email</desc>
          <path
            d="M32.1104 11.3188V15.4128L34.7594 13.4059L32.1104 11.3188Z"
            fill="#06D6A0"
          />
          <path
            d="M17.661 0L14.9316 2.08715H20.3904L17.661 0Z"
            fill="#06D6A0"
          />
          <path
            d="M23.0386 24.5642L35.3207 34.1972V15.0114L23.0386 24.5642Z"
            fill="#06D6A0"
          />
          <path
            d="M17.4999 11.8004C17.0183 11.8004 16.6169 11.961 16.2958 12.2821C15.9747 12.6032 15.7339 13.0848 15.7339 13.5665C15.7339 14.0481 15.8944 14.5298 16.2155 14.8509C16.3761 15.0114 16.6972 15.0917 17.0986 15.0917C17.6605 15.0917 18.3027 14.9311 18.6238 14.8509C18.9449 13.9678 19.1054 12.7637 18.7843 12.4426C18.4632 11.961 17.9816 11.8004 17.4999 11.8004Z"
            fill="#06D6A0"
          />
          <path
            d="M17.6602 28.8189L13.5662 25.6078L1.5249 35H33.7955L21.7542 25.6078L17.6602 28.8189Z"
            fill="#06D6A0"
          />
          <path
            d="M0 15.0114V34.1972L12.2821 24.5642L0 15.0114Z"
            fill="#06D6A0"
          />
          <path
            d="M3.21109 11.3188L0.562012 13.4059L3.21109 15.4128V11.3188Z"
            fill="#06D6A0"
          />
          <path
            d="M30.5045 16.6972V3.69263H4.81641V16.6972L17.6604 26.7316L30.5045 16.6972ZM16.6169 19.8279C15.2522 19.8279 13.8875 19.1857 12.8439 18.0619C11.5595 16.6169 10.837 14.5298 11.0779 12.5229C11.3187 10.8371 12.2017 9.31189 13.5664 8.18803C14.9311 7.14446 16.6169 6.66281 18.3829 6.90363C20.3898 7.14446 22.3164 8.34859 23.36 10.0344C24.1627 11.399 24.4035 12.844 23.9219 14.2889C22.8783 17.3394 17.2591 16.6169 16.6169 16.4564C15.8944 16.3761 15.3325 16.1353 14.9311 15.7339C14.2889 15.0917 13.9678 14.2087 13.9678 13.3256C13.9678 12.4426 14.3691 11.5596 15.0114 10.9174C15.6536 10.2752 16.4563 9.95409 17.3393 9.95409C18.3026 9.95409 19.1857 10.3555 19.8279 10.9977C20.7912 12.0412 20.4701 13.8073 20.149 14.8509C21.1925 14.6903 22.1558 14.3692 22.3967 13.727C22.798 12.5229 22.3967 11.4793 21.9953 10.8371C21.1925 9.55271 19.6673 8.58941 18.1421 8.42886C16.8577 8.26831 15.5733 8.58941 14.5297 9.39216C13.4861 10.1949 12.8439 11.3188 12.6834 12.6032C12.5228 14.1284 13.0045 15.7339 14.048 16.8578C14.61 17.4197 15.493 18.1422 16.7774 18.0619H19.9884V19.6674H16.7774C16.7774 19.8279 16.6971 19.8279 16.6169 19.8279Z"
            fill="#06D6A0"
          />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/trevor-wheeler-95a46659/"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          data-aos="zoom-in"
          data-aos-delay="600"
          data-aos-duration="1000"
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="linkedInTitle linkedInDesc"
          role="img"
        >
          <title id="linkedInTitle">link to LinkedIn account owned by Trevor Wheeler</title>
          <desc id="linkedInDesc">The brand logo for LinkedIn</desc>
          <path
            d="M32.5 0H2.49219C1.11719 0 0 1.13281 0 2.52344V32.4766C0 33.8672 1.11719 35 2.49219 35H32.5C33.875 35 35 33.8672 35 32.4766V2.52344C35 1.13281 33.875 0 32.5 0ZM10.5781 30H5.39062V13.2969H10.5859V30H10.5781ZM7.98437 11.0156C6.32031 11.0156 4.97656 9.66406 4.97656 8.00781C4.97656 6.35156 6.32031 5 7.98437 5C9.64062 5 10.9922 6.35156 10.9922 8.00781C10.9922 9.67187 9.64844 11.0156 7.98437 11.0156V11.0156ZM30.0234 30H24.8359V21.875C24.8359 19.9375 24.7969 17.4453 22.1406 17.4453C19.4375 17.4453 19.0234 19.5547 19.0234 21.7344V30H13.8359V13.2969H18.8125V15.5781H18.8828C19.5781 14.2656 21.2734 12.8828 23.7969 12.8828C29.0469 12.8828 30.0234 16.3437 30.0234 20.8437V30V30Z"
            fill="#06D6A0"
          />
        </svg>
      </a>
    </header>
    <header
      class="menu--desktop"
      v-if="['home'].indexOf($route.name) > -1"
    >
      <router-link
        tag="h1"
        class="name"
        data-aos="fade"
        to="/"
        data-aos-duration="1000"
      >Trevor Wheeler</router-link>
      <div class="links">
        <a
          href="https://github.com/trevorwheeler"
          target="_blank"
          rel="noreferrer"
          data-aos="fade"
          data-aos-delay="200"
          data-aos-duration="1000"
        > Github </a>
        <a
          href="mailto: sendtrevmail@gmail.com"
          target="_blank"
          rel="noreferrer"
          data-aos="fade"
          data-aos-delay="300"
          data-aos-duration="1000"
        > Contact </a>
        <a
          href="#"
          data-aos="fade"
          data-aos-delay="400"
          data-aos-duration="1000"
        > LinkedIn </a>
        <router-link
          :to="{name:'dashboard'}"
          v-if="this.$store.state.token !== null"
          href="#"
          data-aos="fade"
          data-aos-delay="500"
          data-aos-duration="1000"
        > Dashboard </router-link>
      </div>
    </header>
    <div
      class="home--link"
      data-aos-duration="300"
      data-aos="fade"
      v-if="['dashboard'].indexOf($route.name) > -1"
    >
      <router-link
        tag="span"
        to="/"
      >HOME</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>
<style scoped lang="scss">
.home--link {
  padding: 0 3vw;
  height: 70px;
  display: flex;
  position: fixed;
  width: 100%;
  background-color: $secondary;
  @media only screen and (min-width: 1024px) {
    height: 100px;
    background-color: transparent;
  }
  span {
    font-size: 1.8em;
    color: $primary;
    align-self: center;
    font-weight: 600;
    letter-spacing: 1px;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      color: $accent;
      transition: 0.2s ease-in-out;
    }
  }
}
.menu--mobile {
  z-index: 2;
  position: fixed;
  bottom: 0;
  height: 72px;
  width: 100%;
  background-color: $secondary;
  display: flex;
  justify-content: space-between;
  padding: 0 4em;
  @media only screen and (min-width: 768px) {
    display: none;
  }

  a {
    align-self: center;
    height: 37px;
  }
}

.menu--desktop {
  padding: 0 3vw;
  width: 100%;
  height: 70px;
  justify-content: space-between;
  display: none;
  position: absolute;
  top: 0;
  z-index: 2;
  @media only screen and (min-width: 768px) {
    display: flex;
  }
  @media only screen and (min-width: 1024px) {
    height: 100px;
  }
  .name {
    color: $primary;
    font-size: 1.8em;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 1rem;
    letter-spacing: 1px;
    margin: 0;
    align-self: center;
    cursor: pointer;
    &:hover {
      color: $accent;
      transition: 0.2s ease-in-out;
    }
  }
  .links {
    align-self: center;
    a {
      color: $primary;
      font-weight: 400;
      display: inline-block;
      letter-spacing: 1px;
      font-size: 1.8em;
      margin: 0 0.7em;

      &:hover {
        color: $accent;
        transition: 0.2s ease-in-out;
      }
    }
  }
}
</style>
