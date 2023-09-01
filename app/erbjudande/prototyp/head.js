import { NextSeo }          from "next-seo";

export default function Head() {

    const meta = {
        description: 'Till skillnad från wireframes och designskisser är våra prototyper klickbara. Här kan vi göra användaretester och dokumentera upplevelsen innan vi bygger siten.',
        openGraph: {
            type: 'website',
            url: 'https://www.minabastapolare.se/erbjudande/prototyp',
            title: 'Prototypen visualiserar din lösning | Mina Bästa Polare',
            description: 'Till skillnad från wireframes och designskisser är våra prototyper klickbara. Här kan vi göra användaretester och dokumentera upplevelsen innan vi bygger siten.',
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
            <title>Prototypen visualiserar din lösning | Mina Bästa Polare</title>
            <NextSeo {...meta} useAppDir={true} />
        </>
    );
}
