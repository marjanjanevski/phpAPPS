import { NextSeo }          from "next-seo";

export default function Head() {

    const meta = {
        description: 'Låt Mina Bästa Polare utveckla effektiva lösningar för ert företag. Vi är specialister inom applikationer, API-integrationer och skräddarsydda plattformar.',
        openGraph: {
            type: 'website',
            url: 'https://www.minabastapolare.se/tjanster/webb-och-systemutveckling',
            title: 'Webb- och systemutveckling | Mina Bästa Polare',
            description: 'Låt Mina Bästa Polare utveckla effektiva lösningar för ert företag. Vi är specialister inom applikationer, API-integrationer och skräddarsydda plattformar.',
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
            <title>Webb- och systemutveckling | Mina Bästa Polare</title>
            <NextSeo {...meta} useAppDir={true} />
        </>
    );
}
