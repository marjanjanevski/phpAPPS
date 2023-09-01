import { NextSeo }          from "next-seo";

export default function Head() {

    const meta = {
        description: 'Välkommen att höra av dig till Mina Bästa Polare om du har en digital företagsidé, vill utveckla en ny digital tjänst eller optimera en befintlig lösning.',
        openGraph: {
            type: 'website',
            url: 'https://www.minabastapolare.se/kontakt',
            title: 'Kontakta oss | Mina Bästa Polare',
            description: 'Välkommen att höra av dig till Mina Bästa Polare om du har en digital företagsidé, vill utveckla en ny digital tjänst eller optimera en befintlig lösning.',
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
            <title>Kontakta oss | Mina Bästa Polare</title>
            <NextSeo {...meta} useAppDir={true} />
        </>
    );
}
