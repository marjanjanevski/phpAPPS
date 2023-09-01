import { NextSeo }          from "next-seo";

export default function Head() {

    const meta = {
        description: 'Låt oss automatisera era tidigare manuella processer. APIer (Application Programming Interface) hjälper olika system att utbyta information med varandra.',
        openGraph: {
            type: 'website',
            url: 'https://www.minabastapolare.se/erbjudande/api-integrationer',
            title: 'API-integrationer | Mina Bästa Polare',
            description: 'Låt oss automatisera era tidigare manuella processer. APIer (Application Programming Interface) hjälper olika system att utbyta information med varandra.',
            images: [
                {
                    url: 'https://www.minabastapolare.se/img/meta/mina-basta-polare.jpg',
                    width: 1200,
                    height: 760,
                    type: 'image/jpg',
                    secureUrl: 'https://www.minabastapolare.se/img/meta/mina-basta-polare.jpg',
                },
            ],
        },
    };

    return (
        <>
            <title>API-integrationer | Mina Bästa Polare</title>
            <NextSeo {...meta} useAppDir={true} />
        </>
    );
}
