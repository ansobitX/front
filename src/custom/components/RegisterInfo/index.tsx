import * as React from 'react';

interface OwnProps {
    translate: (key: string) => string;
    label: string;
}

export class RegisterInfo extends React.Component<OwnProps> {
    public render() {
        const { label, translate } = this.props;

        return (
            <div className="register-info">
                <div className="register-info__header">
                    {translate(label === 'signup' ? 'page.register.header.register' : 'page.register.header.login')}
                </div>
                <div className="register-info__subheader">
                    {translate('page.register.subheader')}
                </div>
                <div className="register-info__list">
                    <div className="register-info__list__item">
                        <div className="register-info__list__item__dot">
                            <div className="circle" />
                        </div>
                        <div className="register-info__list__item__text">
                            <div className="register-info__list__item__text__header">{translate('page.register.list.header1')}</div>
                            <div className="register-info__list__item__text__desc">{translate('page.register.list.content1')}</div>
                        </div>
                    </div>
                    <div className="register-info__list__item">
                        <div className="register-info__list__item__dot">
                            <div className="circle" />
                        </div>
                        <div className="register-info__list__item__text">
                            <div className="register-info__list__item__text__header">{translate('page.register.list.header2')}</div>
                            <div className="register-info__list__item__text__desc">{translate('page.register.list.content2')}</div>
                        </div>
                    </div>
                    <div className="register-info__list__item">
                        <div className="register-info__list__item__dot">
                            <div className="circle" />
                        </div>
                        <div className="register-info__list__item__text">
                            <div className="register-info__list__item__text__header">{translate('page.register.list.header3')}</div>
                            <div className="register-info__list__item__text__desc">{translate('page.register.list.content3')}</div>
                        </div>
                    </div>
                    {label === 'signup' &&  <div className="register-info__list__item">
                        <div className="register-info__list__item__dot">
                            <div className="circle" />
                        </div>
                        <div className="register-info__list__item__text">
                            <div className="register-info__list__item__text__header">{translate('page.register.list.header4')}</div>
                            <div className="register-info__list__item__text__desc">{translate('page.register.list.content4')}</div>
                        </div>
                    </div>}
                    {label === 'signup' && <div className="register-info__list__item">
                        <div className="register-info__list__item__dot">
                            <div className="circle" />
                        </div>
                        <div className="register-info__list__item__text">
                            <div className="register-info__list__item__text__header">{translate('page.register.list.header5')}</div>
                            <div className="register-info__list__item__text__desc">{translate('page.register.list.content5')}</div>
                        </div>
                    </div>}
                </div>
            </div>
        );
    }
}
