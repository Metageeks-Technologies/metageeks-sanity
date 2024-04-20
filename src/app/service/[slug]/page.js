import MainLayout from "@/components/layout/MainLayout";
import Home5Workprocess from "@/components/workProcess/Home5Workprocess";
import { client } from "../../../../sanity/lib/client";

async function getService() {
  const query = `
 *[_type == "serviceHero"] {
  intoHeading,
    paragraph,
    planHeading,
    heading{
    boldText,
      text
    } ,
    tags,
    slug{
      current
    }
      ,
    mainImage,
    faqImage,
    faq[] {
      question,
      answer
    },
    serviceProcess->{
      subheading,
      heading {
        boldText,
        text
      },
      extraText,
      process[] {
        heading,
        description,
        icon
      }
    },
    serviceFeature->{
      subheading,
      heading {
        boldText,
        text
      },
      extraText,
      process[] {
        heading,
        description,
        icon
      }
    },
    serviceTechStack->{
      subheading,
      heading,
      techStack[] {
        heading,
        icon
      }
    }
  }
  `;

  const response = await client.fetch(query);
  console.log(response);
  return response[0];
}

export const metadata = {
  title: "",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const ServiceDetailsPage = async () => {
  const service = await getService();
  const slug = service.slug.current;
  metadata.title = "Service Details | " + slug;

  return (
    <MainLayout>
      <div
        className="service-details-page pt-120 mb-120"
        id="service-details-section"
      >
        <div className="container">
          <div className="service-details-top-area mb-80">
            <div className="row g-lg-4 gy-5 align-items-center">
              <div
                className="col-lg-6 order-lg-1 order-2 wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="service-details-top-content">
                  <h2>
                    {service.heading.boldText}{" "}
                    <span>{service.heading.text}</span>
                  </h2>
                  <p>{service.paragraph}</p>
                  <ul className="key-features">
                    {service?.tags?.map((tag, index) => (
                      <li key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={15}
                          height={15}
                          viewBox="0 0 15 15"
                        >
                          <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                        </svg>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className="col-lg-6 order-lg-2 order-1 wow animate fadeInRight"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="service-details-img">
                  <img
                    src={
                      service.mainImage ||
                      "/assets/img/innerpage/service-details-feature-img.jpg"
                    }
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="service-details-faq-area wow animate fadeInDown"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <div className="row g-lg-4 gy-5 align-items-xl-center">
              <div className="col-lg-6">
                <div className="service-details-faq-img">
                  <img
                    src={
                      service.faqImage ||
                      "/assets/img/innerpage/service-details-faq-img.jpg"
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-content">
                  <div className="accordion" id="accordionTravel">
                    {service?.faq?.map((faq, index) => (
                      <div className="accordion-item" key={index}>
                        <h2
                          className="accordion-header"
                          id={`faqheading${index}`}
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#faqcollapse${index}`}
                            aria-expanded="false"
                            aria-controls={`faqcollapse${index}`}
                          >
                            {`${index}.`} {faq.question}
                          </button>
                        </h2>
                        <div
                          id={`faqcollapse${index}`}
                          className="accordion-collapse collapse"
                          aria-labelledby={`faqheading${index}`}
                          data-bs-parent="#accordionTravel"
                        >
                          <div className="accordion-body">{faq.answer}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Home5Workprocess />

      <div className="service-details-feature-section mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="section-title5 mb-70 wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <span className="sub-title5 two">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                  >
                    <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
                  </svg>
                  {service.serviceFeature.subheading}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                  >
                    <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
                  </svg>
                </span>
                <h2>
                  {service.serviceFeature.heading.boldText}{" "}
                  <span> {service.serviceFeature.heading.text}</span>
                </h2>
                <p>{service.serviceFeature.extraText}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="service-feature-list">
                {service?.serviceFeature?.process?.map((feature, index) => (
                  <li
                    key={index}
                    className="single-feature wow animate fadeInDown"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                      >
                        <g>
                          <path d="M-0.00146484 16.0002C-0.00146484 24.8226 7.17676 32 15.9999 32C17.9787 32.0031 19.9408 31.6375 21.7856 30.9219C21.8359 30.9039 21.8821 30.876 21.9215 30.8399C21.9608 30.8037 21.9925 30.7601 22.0147 30.7115C22.0369 30.6629 22.0491 30.6104 22.0507 30.557C22.0523 30.5036 22.0431 30.4504 22.0238 30.4006C22.0045 30.3508 21.9754 30.3053 21.9382 30.267C21.9011 30.2286 21.8566 30.198 21.8074 30.1771C21.7583 30.1562 21.7054 30.1454 21.652 30.1452C21.5986 30.1451 21.5457 30.1556 21.4964 30.1762C19.7437 30.8558 17.8798 31.2031 15.9999 31.2003C7.618 31.2003 0.798605 24.3813 0.798605 16.0002C0.798605 11.353 2.94279 6.9574 6.56831 4.08275V6.75419C6.56831 6.86028 6.61045 6.96203 6.68547 7.03705C6.7605 7.11208 6.86225 7.15422 6.96834 7.15422C7.07444 7.15422 7.17619 7.11208 7.25121 7.03705C7.32623 6.96203 7.36838 6.86028 7.36838 6.75419V3.26868C7.36838 3.26268 7.36518 3.25748 7.36438 3.25108C7.36147 3.19171 7.34491 3.1338 7.31597 3.08187C7.30877 3.06947 7.30717 3.05547 7.29877 3.04346C7.29197 3.03426 7.28197 3.02946 7.27477 3.02066C7.25371 2.9953 7.22951 2.97272 7.20276 2.95346C7.19036 2.94426 7.17876 2.93546 7.16556 2.92825C7.13065 2.9084 7.09286 2.89409 7.05355 2.88585C7.04515 2.88425 7.03755 2.88185 7.02875 2.88105C7.00835 2.87785 6.98994 2.86905 6.96834 2.86905H3.48244C3.37634 2.86905 3.27459 2.9112 3.19957 2.98622C3.12455 3.06124 3.0824 3.16299 3.0824 3.26908C3.0824 3.37518 3.12455 3.47693 3.19957 3.55195C3.27459 3.62697 3.37634 3.66912 3.48244 3.66912H5.81104C2.15392 6.69578 -0.00146484 11.2214 -0.00146484 15.9998V16.0002ZM15.9999 0C14.1354 0 12.308 0.318028 10.5699 0.944882C10.47 0.980849 10.3886 1.055 10.3434 1.15103C10.2982 1.24706 10.2931 1.35709 10.329 1.45693C10.365 1.55676 10.4392 1.63822 10.5352 1.68339C10.6312 1.72855 10.7412 1.73371 10.8411 1.69775C12.4956 1.10149 14.2413 0.797736 15.9999 0.80007C24.3819 0.80007 31.2013 7.61866 31.2013 16.0002C31.2013 20.5206 29.1527 24.8386 25.6848 27.7132V25.0662C25.6848 24.9601 25.6426 24.8583 25.5676 24.7833C25.4926 24.7083 25.3908 24.6661 25.2847 24.6661C25.1786 24.6661 25.0769 24.7083 25.0019 24.7833C24.9268 24.8583 24.8847 24.9601 24.8847 25.0662V28.4761C24.8807 28.4981 24.8847 28.5201 24.8847 28.5429V28.5517L24.8851 28.5541C24.8866 28.6178 24.9037 28.6802 24.9351 28.7357C24.9431 28.7501 24.9459 28.7669 24.9563 28.7805C24.9619 28.7885 24.9711 28.7913 24.9775 28.7985C25.0109 28.8405 25.0526 28.8752 25.0999 28.9005L25.1007 28.9013C25.1567 28.9309 25.2171 28.9517 25.2847 28.9517H28.7702C28.8763 28.9517 28.9781 28.9096 29.0531 28.8346C29.1281 28.7595 29.1703 28.6578 29.1703 28.5517C29.1703 28.4456 29.1281 28.3438 29.0531 28.2688C28.9781 28.1938 28.8763 28.1516 28.7702 28.1516H26.4016C29.9247 25.1278 32.0013 20.6674 32.0013 16.0002C32.0013 7.17742 24.8231 0 15.9999 0Z" />
                          <path d="M16.0001 10.2202C12.8122 10.2202 10.2188 12.8136 10.2188 16.0015C10.2188 19.1894 12.8118 21.7828 16.0001 21.7828C19.1883 21.7828 21.7814 19.1894 21.7814 16.0015C21.7814 12.8136 19.1883 10.2202 16.0001 10.2202ZM16.0001 20.9828C13.2534 20.9828 11.0188 18.7482 11.0188 16.0015C11.0188 13.2549 13.2534 11.0203 16.0001 11.0203C18.7467 11.0203 20.9813 13.2549 20.9813 16.0015C20.9813 18.7482 18.7467 20.9828 16.0001 20.9828Z" />
                          <path d="M22.2149 6.91739C22.2062 6.86193 22.1858 6.80894 22.1552 6.76187C22.1246 6.71479 22.0844 6.67469 22.0373 6.64416C20.9107 5.91405 19.6604 5.39552 18.3478 5.11403C18.2929 5.10221 18.2362 5.10208 18.1813 5.11365C18.1264 5.12521 18.0745 5.14822 18.029 5.18116C17.9836 5.21411 17.9456 5.25626 17.9176 5.30486C17.8895 5.35347 17.872 5.40744 17.8662 5.46326C17.7649 6.41934 16.9629 7.141 16 7.141C15.0371 7.141 14.235 6.41974 14.1338 5.46326C14.1281 5.40741 14.1106 5.35341 14.0826 5.30477C14.0545 5.25613 14.0165 5.21396 13.9711 5.181C13.9256 5.14805 13.8737 5.12505 13.8188 5.11351C13.7638 5.10197 13.7071 5.10214 13.6522 5.11403C12.3396 5.39552 11.0893 5.91405 9.96267 6.64416C9.91552 6.67461 9.8753 6.71464 9.84463 6.76165C9.81396 6.80866 9.79353 6.8616 9.78466 6.91703C9.7758 6.97246 9.77869 7.02913 9.79317 7.08336C9.80764 7.13759 9.83336 7.18817 9.86866 7.23181C10.1602 7.59178 10.3079 8.04711 10.2832 8.50969C10.2584 8.97227 10.063 9.40923 9.73465 9.73603C9.40781 10.0643 8.97086 10.2597 8.5083 10.2844C8.04575 10.3092 7.59044 10.1615 7.23043 9.87004C7.18679 9.83474 7.13621 9.80902 7.08198 9.79455C7.02775 9.78007 6.97108 9.77718 6.91565 9.78604C6.86022 9.79491 6.80728 9.81534 6.76027 9.84601C6.71326 9.87668 6.67323 9.9169 6.64278 9.96405C5.91263 11.0906 5.3941 12.3409 5.11265 13.6536C5.1007 13.7085 5.10047 13.7653 5.11198 13.8203C5.12349 13.8753 5.14648 13.9272 5.17945 13.9727C5.21241 14.0182 5.2546 14.0562 5.30327 14.0843C5.35194 14.1124 5.40599 14.1299 5.46188 14.1356C6.41796 14.236 7.13962 15.0381 7.13962 16.0014C7.13962 16.9647 6.41836 17.7667 5.46188 17.8671C5.40601 17.873 5.352 17.8905 5.30337 17.9186C5.25473 17.9467 5.21256 17.9847 5.17961 18.0302C5.14666 18.0756 5.12366 18.1276 5.11212 18.1825C5.10059 18.2375 5.10077 18.2943 5.11265 18.3492C5.3941 19.6618 5.91263 20.9121 6.64278 22.0387C6.67323 22.0859 6.71328 22.1262 6.76032 22.1569C6.80737 22.1876 6.86035 22.2081 6.91583 22.2169C6.97131 22.2258 7.02803 22.2229 7.0823 22.2084C7.13657 22.1939 7.18718 22.1681 7.23083 22.1327C7.59067 21.841 8.04596 21.6932 8.50853 21.718C8.97109 21.7427 9.40801 21.9383 9.73465 22.2667C10.063 22.5935 10.2584 23.0305 10.2832 23.4931C10.3079 23.9556 10.1602 24.411 9.86866 24.7709C9.83336 24.8146 9.80764 24.8652 9.79317 24.9194C9.77869 24.9736 9.7758 25.0303 9.78466 25.0857C9.79353 25.1411 9.81396 25.1941 9.84463 25.2411C9.8753 25.2881 9.91552 25.3281 9.96267 25.3586C11.0893 26.0887 12.3396 26.6072 13.6522 26.8887C13.7071 26.9006 13.7638 26.9008 13.8188 26.8892C13.8737 26.8777 13.9256 26.8547 13.9711 26.8217C14.0165 26.7888 14.0545 26.7466 14.0826 26.698C14.1106 26.6493 14.1281 26.5953 14.1338 26.5395C14.235 25.5834 15.0371 24.8617 16 24.8617C16.9629 24.8617 17.7649 25.583 17.8662 26.5395C17.8719 26.5953 17.8894 26.6493 17.9174 26.698C17.9455 26.7466 17.9835 26.7888 18.0289 26.8217C18.0744 26.8547 18.1263 26.8777 18.1812 26.8892C18.2362 26.9008 18.2929 26.9006 18.3478 26.8887C19.6604 26.6072 20.9107 26.0887 22.0373 25.3586C22.0845 25.3281 22.1247 25.2881 22.1554 25.2411C22.186 25.1941 22.2065 25.1411 22.2153 25.0857C22.2242 25.0303 22.2213 24.9736 22.2068 24.9194C22.1924 24.8652 22.1666 24.8146 22.1313 24.7709C21.5273 24.0237 21.5849 22.9468 22.2653 22.2667C22.9458 21.5867 24.0223 21.5283 24.7696 22.1327C24.8132 22.168 24.8638 22.1937 24.918 22.2082C24.9722 22.2227 25.0289 22.2256 25.0843 22.2167C25.1398 22.2078 25.1927 22.1874 25.2397 22.1567C25.2867 22.1261 25.3268 22.0859 25.3572 22.0387C26.0874 20.9121 26.6059 19.6618 26.8873 18.3492C26.8993 18.2943 26.8995 18.2375 26.888 18.1825C26.8765 18.1275 26.8535 18.0755 26.8205 18.03C26.7876 17.9845 26.7454 17.9465 26.6967 17.9184C26.648 17.8904 26.594 17.8729 26.5381 17.8671C25.582 17.7667 24.8604 16.9647 24.8604 16.0014C24.8604 15.0381 25.5816 14.236 26.5381 14.1356C26.594 14.1298 26.648 14.1123 26.6966 14.0842C26.7453 14.0561 26.7874 14.0181 26.8204 13.9726C26.8533 13.9271 26.8763 13.8752 26.8879 13.8202C26.8994 13.7652 26.8992 13.7085 26.8873 13.6536C26.6059 12.3409 26.0874 11.0906 25.3572 9.96405C25.3268 9.91684 25.2867 9.87656 25.2397 9.84586C25.1926 9.81515 25.1396 9.79469 25.0842 9.78582C25.0287 9.77696 24.972 9.77987 24.9177 9.79438C24.8634 9.80889 24.8128 9.83467 24.7692 9.87004C24.4091 10.1613 23.9539 10.3089 23.4915 10.2841C23.0291 10.2594 22.5922 10.0641 22.2653 9.73603C21.937 9.40923 21.7416 8.97227 21.7168 8.50969C21.6921 8.04711 21.8398 7.59178 22.1313 7.23181C22.1666 7.18822 22.1923 7.1377 22.2068 7.08353C22.2212 7.02936 22.2238 6.97276 22.2149 6.91739ZM24.9 10.7457C25.3956 11.5812 25.7698 12.483 26.0113 13.424C24.8732 13.7412 24.0607 14.7813 24.0607 16.0014C24.0607 17.2215 24.8736 18.2616 26.0117 18.5788C25.7702 19.5199 25.3961 20.4218 24.9004 21.2574C24.3918 20.9714 23.8035 20.8599 23.2255 20.94C22.6475 21.0201 22.1117 21.2875 21.7001 21.7011C21.2865 22.1127 21.0191 22.6484 20.9389 23.2264C20.8587 23.8044 20.9701 24.3927 21.2561 24.9014C20.4205 25.3972 19.5186 25.7714 18.5774 26.0126C18.2602 24.8745 17.2205 24.0621 16 24.0621C14.7795 24.0621 13.7398 24.8749 13.423 26.013C12.4817 25.7718 11.5796 25.3976 10.7439 24.9018C11.0299 24.3931 11.1414 23.8048 11.0613 23.2269C10.9811 22.6489 10.7138 22.1131 10.3003 21.7015C9.88861 21.288 9.35285 21.0208 8.77493 20.9406C8.197 20.8604 7.60872 20.9717 7.10002 21.2574C6.60437 20.4219 6.23018 19.5202 5.98872 18.5792C7.12682 18.2616 7.93929 17.2215 7.93929 16.0014C7.93929 14.7813 7.12642 13.7412 5.98832 13.424C6.22975 12.4829 6.60393 11.5809 7.09962 10.7453C7.60825 11.0312 8.19653 11.1427 8.77448 11.0625C9.35244 10.9824 9.88823 10.7152 10.2999 10.3017C10.7135 9.89009 10.9809 9.35432 11.0611 8.77635C11.1413 8.19838 11.0299 7.61005 10.7439 7.1014C11.5795 6.60559 12.4814 6.23139 13.4226 5.9901C13.7398 7.1282 14.7791 7.94107 15.9996 7.94107C17.2201 7.94107 18.2598 7.1282 18.5766 5.9901C19.5179 6.23136 20.42 6.60555 21.2557 7.1014C20.9697 7.61001 20.8582 8.19831 20.9383 8.77628C21.0185 9.35425 21.2857 9.89004 21.6993 10.3017C22.1108 10.7154 22.6466 10.9828 23.2246 11.0629C23.8026 11.1431 24.3913 11.0317 24.9 10.7457Z" />
                        </g>
                      </svg>
                    </div>
                    <div className="content">
                      <h5> {feature.heading} </h5>
                      <p>{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* tech stack */}
      <div className="service-details-tools-section mb-120">
        <div className="container">
          <div className="row mb-60">
            <div
              className="col-lg-12 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="section-title5">
                <span className="sub-title5 two">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                  >
                    <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
                  </svg>
                  {service.serviceTechStack.subheading}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                  >
                    <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
                  </svg>
                </span>
                <h2>
                  {service.serviceTechStack.heading.boldText}
                  <span>{service.serviceTechStack.heading.text}</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {service?.serviceTechStack?.techStack?.map((tool, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="tools-card">
                  <div className="tools-icon">
                    <img src={tool.icon} alt="" style={{ width: "22px" }} />
                  </div>
                  <div className="tools-name">
                    <span> {tool.heading} </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ServiceDetailsPage;
