import * as React from 'react';
import { Link } from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor';
import VisibilitySensor from 'react-visibility-sensor';

/* Icons  */
const ArrowCircleIcon = require('../../../assets/images/landing/icons/ArrowCircle.svg');

const AwsIcon = require('../../../assets/images/landing/tools/infrastructure/Aws.png');
const AzureIcon = require('../../../assets/images/landing/tools/infrastructure/Azure.png');
const DockerIcon = require('../../../assets/images/landing/tools/infrastructure/Docker.png');
const GoogleCloudIcon = require('../../../assets/images/landing/tools/infrastructure/GoogleCloud.png');
const KafkaIcon = require('../../../assets/images/landing/tools/infrastructure/Kafka.png');
const KubernetesIcon = require('../../../assets/images/landing/tools/infrastructure/Kubernetes.png');
const TerraformIcon = require('../../../assets/images/landing/tools/infrastructure/Terraform.png');
const VaultIcon = require('../../../assets/images/landing/tools/infrastructure/Vault.png');

const GoIcon = require('../../../assets/images/landing/tools/backend/Go.png');
const JavaIcon = require('../../../assets/images/landing/tools/backend/Java.png');
const NodeIcon = require('../../../assets/images/landing/tools/backend/Node.png');
const RailsIcon = require('../../../assets/images/landing/tools/backend/Rails.png');
const ScalaIcon = require('../../../assets/images/landing/tools/backend/Scala.png');

const CosmosIcon = require('../../../assets/images/landing/tools/blockchain/cosmos.png');
const Erc20Icon = require('../../../assets/images/landing/tools/blockchain/erc20.png');
const EthIcon = require('../../../assets/images/landing/tools/blockchain/eth.png');
const HyperledgerIcon = require('../../../assets/images/landing/tools/blockchain/hyperledger.png');
const RippleIcon = require('../../../assets/images/landing/tools/blockchain/ripple.png');
const StellarIcon = require('../../../assets/images/landing/tools/blockchain/stellar.png');

const AndroidIcon = require('../../../assets/images/landing/tools/mobile/Android.png');
const FlutterIcon = require('../../../assets/images/landing/tools/mobile/Flutter.png');
const IonicIcon = require('../../../assets/images/landing/tools/mobile/Ionic.png');
const IosIcon = require('../../../assets/images/landing/tools/mobile/Ios.png');
const ReactNativeIcon = require('../../../assets/images/landing/tools/mobile/ReactNative.png');

const InfluxIcon = require('../../../assets/images/landing/tools/database/Influx.png');
const MongoIcon = require('../../../assets/images/landing/tools/database/Mongo.png');
const MysqlIcon = require('../../../assets/images/landing/tools/database/MySQL.png');
const PostgreIcon = require('../../../assets/images/landing/tools/database/PostgreSQL.png');
const RedisIcon = require('../../../assets/images/landing/tools/database/Redis.png');

const AngularIcon = require('../../../assets/images/landing/tools/frontend/Angular.png');
const BackboneIcon = require('../../../assets/images/landing/tools/frontend/Backbone.png');
const BootstrapIcon = require('../../../assets/images/landing/tools/frontend/Bootstrap.png');
const EmberIcon = require('../../../assets/images/landing/tools/frontend/Ember.png');
const JQueryIcon = require('../../../assets/images/landing/tools/frontend/JQuery.png');
const ReactIcon = require('../../../assets/images/landing/tools/frontend/React.png');
const VueIcon = require('../../../assets/images/landing/tools/frontend/Vue.png');


interface OwnProps {
    changeRoute: (isVisible: boolean, route: string) => void;
    translate: (key: string) => string;
}

type Props = OwnProps;

// tslint:disable-next-line: no-default-export
export default class LandingTools extends React.Component<Props> {
    public render() {
        const { changeRoute, translate } = this.props;

        return (
            <ScrollableAnchor id="tools">
                <div className="pg-landing-screen__tools">
                    <VisibilitySensor onChange={e => changeRoute(e, 'tools')} partialVisibility={true}>
                        <div className="pg-landing-screen__tools__wrap">
                            <h1
                                data-aos="fade-down"
                                data-aos-duration="1000"
                                data-aos-offset="100"
                            >
                                {translate('page.body.landing.tools.title')}
                            </h1>
                            <h2
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-offset="100"
                            >
                                {translate('page.body.landing.tools.subtitle')}
                            </h2>
                            <div
                                className="pg-landing-screen__tools__wrap__content"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-offset="100"
                            >
                                <div className="pg-landing-screen__tools__wrap__content__col">
                                    <span>{translate('page.body.landing.tools.infrastructure.title')}</span>
                                    <span><img src={DockerIcon} alt="Docker" /></span>
                                    <span><img src={KubernetesIcon} alt="Kubernetes" /></span>
                                    <span><img src={KafkaIcon} alt="Kafka" /></span>
                                    <span><img src={TerraformIcon} alt="Terraform" /></span>
                                    <span><img src={VaultIcon} alt="Vault" /></span>
                                    <span><img src={GoogleCloudIcon} alt="Google cloud" /></span>
                                    <span><img src={AwsIcon} alt="Aws" /></span>
                                    <span><img src={AzureIcon} alt="Azure" /></span>
                                </div>
                                <div className="pg-landing-screen__tools__wrap__content__col">
                                    <span>{translate('page.body.landing.tools.backend.title')}</span>
                                    <span><img src={RailsIcon} alt="Rails" /></span>
                                    <span><img src={NodeIcon} alt="Node" /></span>
                                    <span><img src={GoIcon} alt="Go" /></span>
                                    <span><img src={JavaIcon} alt="Java" /></span>
                                    <span><img src={ScalaIcon} alt="Scala" /></span>
                                </div>
                                <div className="pg-landing-screen__tools__wrap__content__col">
                                    <span>{translate('page.body.landing.tools.frontend.title')}</span>
                                    <span><img src={ReactIcon} alt="React" /></span>
                                    <span><img src={AngularIcon} alt="Angular" /></span>
                                    <span><img src={JQueryIcon} alt="JQuery" /></span>
                                    <span><img src={EmberIcon} alt="Ember" /></span>
                                    <span><img src={VueIcon} alt="Vue" /></span>
                                    <span><img src={BackboneIcon} alt="Backbone" /></span>
                                    <span><img src={BootstrapIcon} alt="Bootstrap" /></span>
                                </div>
                                <div className="pg-landing-screen__tools__wrap__content__col">
                                    <span>{translate('page.body.landing.tools.databases.title')}</span>
                                    <span><img src={MysqlIcon} alt="Mysql" /></span>
                                    <span><img src={PostgreIcon} alt="Postgre" /></span>
                                    <span><img src={MongoIcon} alt="Mongo" /></span>
                                    <span><img src={InfluxIcon} alt="Influx" /></span>
                                    <span><img src={RedisIcon} alt="Redis" /></span>
                                </div>
                                <div className="pg-landing-screen__tools__wrap__content__col">
                                    <span>{translate('page.body.landing.tools.mobile.title')}</span>
                                    <span><img src={AndroidIcon} alt="Android" /></span>
                                    <span><img src={IosIcon} alt="ios" /></span>
                                    <span><img src={ReactNativeIcon} alt="React Native" /></span>
                                    <span><img src={IonicIcon} alt="Ionic" /></span>
                                    <span><img src={FlutterIcon} alt="Flutter" /></span>
                                </div>
                                <div className="pg-landing-screen__tools__wrap__content__col">
                                    <span>{translate('page.body.landing.tools.blockchain.title')}</span>
                                    <span><img src={EthIcon} alt="Eth" /></span>
                                    <span><img src={Erc20Icon} alt="Erc20" /></span>
                                    <span><img src={HyperledgerIcon} alt="Hyperledger" /></span>
                                    <span><img src={StellarIcon} alt="Stellar" /></span>
                                    <span><img src={CosmosIcon} alt="Cosmos" /></span>
                                    <span><img src={RippleIcon} alt="Ripple" /></span>
                                </div>
                            </div>
                            <Link className="pg-landing-screen__tools__wrap__content__tech-sales" to="#">
                                <span>{translate('page.body.landing.tools.link')}</span>
                                <img src={ArrowCircleIcon} alt="Arrow"/>
                            </Link>
                        </div>
                    </VisibilitySensor>
                </div>
            </ScrollableAnchor>
        );
    }
}
