import { NextSeo }          from "next-seo";

export default function Head() {

    const meta = {
        description: 'Att bygga en MVP innebär att fokusera på måste-funktionerna och skapa en första fungerande lösning. MVP\'n hjälper dig sedan att utveckla vidare i rätt riktning.',
        openGraph: {
            type: 'website',
            url: 'https://www.minabastapolare.se/erbjudande/mvp',
            title: 'Minimum Viable Product (MVP) | Mina Bästa Polare',
            description: 'Att bygga en MVP innebär att fokusera på måste-funktionerna och skapa en första fungerande lösning. MVP\'n hjälper dig sedan att utveckla vidare i rätt riktning.',
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
            <title>Minimum Viable Product (MVP) | Mina Bästa Polare</title>
            <NextSeo {...meta} useAppDir={true} />
        </>
    );
}
