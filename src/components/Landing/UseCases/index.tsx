import * as React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

interface OwnProps {
    changeRoute: (isVisible: boolean, route: string) => void;
    translate: (key: string) => string;
}

type Props = OwnProps;

// tslint:disable-next-line: no-default-export
export default class LandingUseCases extends React.Component<Props> {
    public render() {
        const { changeRoute, translate } = this.props;

        return (
            <div className="pg-landing-screen__use-cases">
                <div className="pg-landing-screen__use-cases__wrap">
                    <h1>{translate('page.body.landing.useCases.title')}</h1>
                    <h2>{translate('page.body.landing.useCases.subtitle')}</h2>
                    <div className="pg-landing-screen__use-cases__wrap__content">
                        <VisibilitySensor onChange={e => changeRoute(e, 'use-cases')} partialVisibility={true}>
                            <div
                                className="pg-landing-screen__use-cases__wrap__content__item"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-offset="100"
                            >
                                <span className="title">{translate('page.body.landing.useCases.assets.title')}</span>
                                <span className="text">{translate('page.body.landing.useCases.assets.text')}</span>
                            </div>
                        </VisibilitySensor>
                        <div
                            className="pg-landing-screen__use-cases__wrap__content__item"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-offset="100"
                        >
                            <span className="title">{translate('page.body.landing.useCases.payments.title')}</span>
                            <span className="text">{translate('page.body.landing.useCases.payments.text')}</span>
                        </div>
                        <div
                            className="pg-landing-screen__use-cases__wrap__content__item"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-offset="100"
                        >
                            <span className="title">{translate('page.body.landing.useCases.counter.title')}</span>
                            <span className="text">{translate('page.body.landing.useCases.counter.text')}</span>
                        </div>
                        <div
                            className="pg-landing-screen__use-cases__wrap__content__item"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-offset="100"
                        >
                            <span className="title">{translate('page.body.landing.useCases.analyze.title')}</span>
                            <span className="text">{translate('page.body.landing.useCases.analyze.text')}</span>
                        </div>
                        <div
                            className="pg-landing-screen__use-cases__wrap__content__item"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-offset="100"
                        >
                            <span className="title">{translate('page.body.landing.useCases.secure.title')}</span>
                            <span className="text">{translate('page.body.landing.useCases.secure.text')}</span>
                        </div>
                        <VisibilitySensor onChange={e => changeRoute(e, 'use-cases')} partialVisibility={true}>
                            <div
                                className="pg-landing-screen__use-cases__wrap__content__item"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-offset="100"
                            >
                                <span className="title">{translate('page.body.landing.useCases.networks.title')}</span>
                                <span className="text">{translate('page.body.landing.useCases.networks.text')}</span>
                            </div>
                        </VisibilitySensor>
                    </div>
                </div>
            </div>
        );
    }
}
