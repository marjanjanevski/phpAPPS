import { NextSeo }          from "next-seo";

export default function Head() {

    const meta = {
        description: 'Vår webbplats använder kakor (cookies). Vill du inte ha våra kakor kan du hindra dem genom att göra inställningar i din webbläsare. Läs mer här.',
        openGraph: {
            type: 'website',
            url: 'https://www.minabastapolare.se/cookies',
            title: 'Information om cookies | Mina Bästa Polare',
            description: 'Vår webbplats använder kakor (cookies). Vill du inte ha våra kakor kan du hindra dem genom att göra inställningar i din webbläsare. Läs mer här.',
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
            <title>Information om cookies | Mina Bästa Polare</title>
            <NextSeo {...meta} useAppDir={true} />
        </>
    );
}
