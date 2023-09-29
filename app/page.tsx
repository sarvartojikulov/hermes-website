import { CTA } from "@/components/CTA";
import { Headline } from "@/components/Headline";
import Blog from "@/components/Blog";
import clsx from "clsx";

export default function Home() {
    return (
        <main className="container mx-auto flex flex-col gap-20 md:gap-20 lg:gap-36 pb-40">
            <section
                className={clsx(
                    "mt-20 w-full grid grid-cols-6 gap-x-5 gap-y-12",
                    "lg:grid-cols-12 lg:py-12"
                )}
            >
                <div
                    className={clsx(
                        "col-span-6 lg:px-12 flex flex-col gap-8 lg:gap-16"
                    )}
                >
                    <Headline
                        size="large"
                        label="Надати допомогу"
                        color="primary"
                    />
                    <p className="text-lg font-medium">
                        Благодійний фонд «ГЕРМЕС» вдячний всім небайдужим
                        українцям, іноземним партнерам та донорам за неймовірну
                        допомогу та підтримку українського цивільного населення
                        під час війни. Низький уклін нашим Захисникам і
                        Захисницям, і величезна подяка тим, хто надає допомогу
                        ЗСУ.
                    </p>
                    <div className="flex justify-start lg:justify-start">
                        <CTA
                            color="primary"
                            label="Зробити благодійний внесок"
                        />
                    </div>
                </div>
                <div
                    className={clsx(
                        "col-span-6 lg:px-12 flex flex-col gap-8 lg:gap-16"
                    )}
                >
                    <Headline
                        size="large"
                        label="Отримати допомогу*"
                        color="secondary"
                    />
                    <p className="text-lg font-medium">
                        Благодійний фонд «ГЕРМЕС» надає допомогу Збройним Силам
                        України. Ми надаємо допомогу цивільному населенню, що
                        знаходиться на де окупованих територіях або прикордонних
                        зонах.
                        <p className="">
                            Благодійний фонд «ГЕРМЕС» надає допомогу Збройним
                            Силам України. Ми надаємо допомогу цивільному
                            населенню
                        </p>
                    </p>
                    <div className="flex justify-start lg:justify-start">
                        <CTA color="secondary" label="Попросити допомогу" />
                    </div>
                </div>
            </section>

            <section
                className={clsx(
                    "grid grid-cols-6 gap-y-8 lg:gap-y-16 lg:grid-cols-12"
                )}
            >
                <div className="col-span-6">
                    <Headline size="medium" label="Про Фонд" color="primary" />
                </div>
                <div className="col-span-5 row-start-2 flex flex-col gap-4">
                    <p className="text-lg font-medium">
                        Благодійний фонд «ГЕРМЕС» було створено за ініціативи
                        небайдужих українців. Фонд має наметі допомогу Збройним
                        силам України, військовослужбовцям на передовій та тим,
                        що мають необхідність в лікуванні та реабілітації.
                    </p>
                    <p className="text-lg font-medium">
                        Під час війни, цивільне населення України зазнає
                        небезпеки та потребує допомоги. Фонд надає допомогу
                        громадянам, які проживають на деокупованих територіях
                        або в прифронтових зонах.
                    </p>
                </div>
                <div className="row-start-3 col-start-1 lg:col-start-6 col-span-2 flex justify-start lg:justify-center">
                    <CTA color="primary" label="Контакти" />
                </div>
            </section>

            <section
                className={clsx(
                    "grid grid-cols-1 gap-8 lg:gap-y-16 lg:grid-cols-2"
                )}
            >
                <div className="col-span-full">
                    <Headline
                        size="medium"
                        label="Питання-Відповіді"
                        color="primary"
                    />
                </div>

                <div className="col-span-1 flex flex-col gap-y-4">
                    <h4 className="font-semibold text-lg">
                        Кому Фонд надає військову допомогу?
                    </h4>
                    <p>
                        Фонд допомагає бойовим підрозділам (ЗСУ, НГУ, ДПСУ,
                        ТрО). Ми надаємо допомогу відповідно до можливостей
                        фонду.
                    </p>
                </div>
                <div className="col-span-1 flex flex-col gap-y-4">
                    <h4 className="font-semibold text-lg">
                        Я – фізична особа, чи можу я отримати допомогу?
                    </h4>
                    <p>
                        Наразі Фонд приймає лише офіційні колективні звернення
                        безпосередньо від органів місцевого самоврядування,
                        медичних та освітніх закладів, які знаходяться на
                        деокупованих та прифронтових територіях. Для пошуку
                        інформації про допомогу у вашому регіоні звертайтеся на
                        гарячу лінію гуманітарного штабу ЦВА вашого регіону або
                        до органів місцевої влади.
                    </p>
                </div>
                <div className="col-span-1 flex flex-col gap-y-4">
                    <h4 className="font-semibold text-lg">
                        Де і як заповнити запит на отримання допомоги?
                    </h4>
                    <p>
                        Щоб отримати допомогу, слід заповнити запит: Ссылка на
                        файл посилання на запит Скан копію Запиту, з
                        обов’язковим підписом командира Військової частини та
                        печаткою ВЧ необхідно відправити на електронну адресу
                        Фонду Email: yatsiuk20@gmail.com
                    </p>
                </div>
                <div className="col-span-1 flex flex-col gap-y-4">
                    <h4 className="font-semibold text-lg">
                        За які кошти функціонує Фонд?
                    </h4>
                    <p>
                        Наразі адміністративні витрати Фонду покриваються за
                        особистий рахунок засновників Фонду. Кожна гривня
                        благодійних внесків використовується на благодійну
                        допомогу.
                    </p>
                </div>
                <div className="col-span-1 flex flex-col gap-y-4">
                    <h4 className="font-semibold text-lg">
                        Що відбувається після відправки запиту ?
                    </h4>
                    <p>
                        Відповідь стосовно Вашого запиту буде приходити на Вашу
                        електронну адресу, або ми зв’яжемося з Вами по телефону.
                        Рішення стосовно вашого запиту може надійти від 2
                        робочих днів до місяця, залежно від багатьох факторів,
                        серед яких: ситуації на фронті, статус закупок та
                        поставок, об’єму отриманих благодійних внесків,
                        кількості вхідних запитів до фонду, часу на верифікацію
                        запитів, наявності всіх необхідних деталей у запиті.
                    </p>
                </div>
            </section>
        </main>
    );
}

const TempBlog = () => {
    return (
        <section
            className={clsx(
                "grid grid-cols-6 gap-y-8 lg:gap-y-16 lg:grid-cols-12"
            )}
        >
            <div className="col-span-6">
                <Headline
                    size="medium"
                    label="Latest News And Updates"
                    color="primary"
                />
            </div>
            <div className="col-span-full">
                <Blog />
            </div>

            <div className="row-start-3 col-start-1 lg:col-start-6 col-span-2 flex justify-start lg:justify-center">
                <CTA color="secondary" label="More" />
            </div>
        </section>
    );
};
