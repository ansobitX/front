import * as React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

interface OwnProps {
    changeRoute: (isVisible: boolean, route: string) => void;
    translate: (key: string) => string;
}

type Props = OwnProps;

// tslint:disable-next-line: no-default-export
export default class LandingCompany extends React.Component<Props> {
    public render() {
        const { changeRoute, translate } = this.props;

        return (
                <div className="pg-landing-screen__company">
                    <div className="pg-landing-screen__company__background" />
                    <VisibilitySensor onChange={e => changeRoute(e, 'company')} partialVisibility={true}>
                        <div
                            className="pg-landing-screen__company__wrap"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-offset="100"
                        >
                            <h1>{translate('page.body.landing.company.title')}</h1>
                            <span>{translate('page.body.landing.company.text1')}</span>
                            <span>{translate('page.body.landing.company.text2')}</span>
                            <span>{translate('page.body.landing.company.text3')}</span>
                        </div>
                    </VisibilitySensor>
                </div>
        );
    }
}
