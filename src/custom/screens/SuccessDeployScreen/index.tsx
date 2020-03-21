import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { RouterProps } from 'react-router';
import { Link, withRouter } from 'react-router-dom';
import { setDocumentTitle } from '../../../helpers';

/* Icons */
const CloudImage = require('../../assets/images/deploy/success/MovingBlock.gif');

interface ReduxProps {
    isSidebarOpen: boolean;
}

type Props = ReduxProps & RouterProps & InjectedIntlProps;

class SuccessDeployScreenClass extends React.Component<Props, InjectedIntlProps> {
    public componentDidMount() {
        setDocumentTitle('Success deploy');
    }

    public render() {
        return (
            <div className="pg-success-deploy">
                <div className="pg-success-deploy__wrap">
                    <div className="pg-success-deploy__col">
                        <h1>{this.translate('page.body.successDeploy.title')}</h1>
                        <h2>{this.translate('page.body.successDeploy.subtitle')}</h2>
                        <span>{this.translate('page.body.successDeploy.text1')}</span>
                        <span>{this.translate('page.body.successDeploy.text2')}</span>
                        <Link to="/cloud" className="landing-button">
                            {this.translate('page.body.successDeploy.link')}
                        </Link>
                    </div>
                    <div className="pg-success-deploy__col">
                        <img src={CloudImage} alt="link to Cloud page" />
                    </div>
                </div>
            </div>
        );
    }

    private translate = (key: string) => this.props.intl.formatMessage({id: key});
}

// tslint:disable-next-line:no-any
export const SuccessDeployScreen = withRouter(injectIntl(SuccessDeployScreenClass) as any);
