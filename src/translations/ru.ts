import { LangType } from '.';

export const ru: LangType = {
  'page.header.navbar.signIn': 'Войти',
  'page.header.navbar.trade': 'Биржа',
  'page.header.navbar.wallets': 'Кошельки',
  'page.header.navbar.openOrders': 'Ордера',
  'page.header.navbar.history': 'История',

  'page.header.navbar.profile': 'Профиль',
  'page.header.navbar.kyc': 'Верификация',
  'page.header.navbar.logout': 'Выйти',

  'page.body.trade.header.markets': 'Рынки',
  'page.body.trade.header.markets.content.pair': 'Рыночная пара',
  'page.body.trade.header.markets.content.price': 'Цена',
  'page.body.trade.header.markets.content.change': 'Изменение цены за 24ч',
  'page.body.trade.header.markets.content.search': 'Поиск',

  'page.body.trade.header.newOrder': 'Создать новую сделку',
  'page.body.trade.header.newOrder.content.tabs.buy': 'Купить',
  'page.body.trade.header.newOrder.content.tabs.sell': 'Продать',
  'page.body.trade.header.newOrder.content.orderType': 'Тип запроса',
  'page.body.trade.header.newOrder.content.orderType.limit': 'Лимит',
  'page.body.trade.header.newOrder.content.orderType.market': 'Рынок',
  'page.body.trade.header.newOrder.content.price': 'Цена',
  'page.body.trade.header.newOrder.content.amount': 'Кол.',
  'page.body.trade.header.newOrder.content.total': 'Всего',
  'page.body.trade.header.newOrder.content.available': 'Доступно',
  'page.body.trade.header.newOrder.content.estimatedFee': 'Расчетная плата',

  'page.body.trade.header.marketDepths': 'Глубина рынка',
  'page.body.trade.header.marketDepths.content.price': 'Цена:',
  'page.body.trade.header.marketDepths.content.volume': 'Объем:',
  'page.body.trade.header.marketDepths.content.cumulativeVolume': 'Общий объем:',
  'page.body.trade.header.marketDepths.content.cumulativeValue': 'Общее значение:',

  'page.body.trade.header.asks': 'Запросы на продажу',
  'page.body.trade.header.bids': 'Запросы на покупку',
  'page.body.trade.orderbook.header.price': 'Цена',
  'page.body.trade.orderbook.header.amount': 'Кол.',
  'page.body.trade.orderbook.header.volume': 'Объем',

  'page.body.trade.header.recentTrades': 'Последние завершенные сделки ',
  'page.body.trade.header.recentTrades.content.time': 'Время',
  'page.body.trade.header.recentTrades.content.price': 'Цена',
  'page.body.trade.header.recentTrades.content.amount': 'Кол.',

  'page.body.trade.header.openOrders': 'Активные запросы на сделку',
  'page.body.trade.header.openOrders.content.date': 'Дата',
  'page.body.trade.header.openOrders.content.action': 'Действие',
  'page.body.trade.header.openOrders.content.state': 'Состояние',
  'page.body.trade.header.openOrders.content.state.wait': 'Ожидается',
  'page.body.trade.header.openOrders.content.price': 'Цена',
  'page.body.trade.header.openOrders.content.amount': 'Кол.',
  'page.body.trade.header.openOrders.content.total': 'Всего',
  'page.body.trade.header.openOrders.content.filled': 'Заполненный',
  'page.body.trade.header.openOrders.content.ask': 'Запрошено',
  'page.body.trade.header.openOrders.content.bid': 'Предложено',

  'page.body.wallets.locked': 'Зафиксировано',
  'page.body.wallets.balance': 'Баланс',
  'page.body.wallets.tabs.deposit': 'Пополнить',
  'page.body.wallets.tabs.deposit.ccy.message.submit': 'Пожалуйста, внесите депозитный платеж. Ваш депозит будет доступен после 6 подтверждений',
  'page.body.wallets.tabs.deposit.ccy.message.address': 'Пополнить на кошелек',
  'page.body.wallets.tabs.deposit.ccy.message.button': 'КОПИРОВАТЬ',

  'page.body.wallets.tabs.deposit.fiat.message1': 'Вы можете внести депозит в банке, используя следующие реквизиты',
  'page.body.wallets.tabs.deposit.fiat.message2': 'Пожалуйста, используйте предоставленную информацию для завершения банковского платежа. Ваш депозит станет доступным на протяжении 2х рабочих дней.',
  'page.body.wallets.tabs.deposit.fiat.bankName': 'Название банка',
  'page.body.wallets.tabs.deposit.fiat.accountNumber': 'Номер счета',
  'page.body.wallets.tabs.deposit.fiat.accountName': 'Имя счета',
  'page.body.wallets.tabs.deposit.fiat.phoneNumber': 'Номер телефона',
  'page.body.wallets.tabs.deposit.fiat.referenceCode': 'Ваш ссылочный код',
  'page.body.wallets.table.pending': 'Обрабатывается',
  'page.body.wallets.tabs.deposit.fiat.admin': 'Для того, чтобы вывести эту валюту, обратитесь к администратору!',

  'page.body.wallets.tabs.withdraw': 'Вывод',
  'page.body.wallets.tabs.withdraw.content.address': 'Адрес для вывода',
  'page.body.wallets.tabs.withdraw.content.amount': 'Сумма вывода',
  'page.body.wallets.tabs.withdraw.content.code2fa': '6-ти значный GAuthenticator код',
  'page.body.wallets.tabs.withdraw.content.fee': 'Налог',
  'page.body.wallets.tabs.withdraw.content.total': 'Общая сумма вывода',
  'page.body.wallets.tabs.withdraw.content.button': 'ВЫВЕСТИ',
  'page.body.wallets.tabs.withdraw.content.addressPlaceholder': 'Адресс',

  'page.body.wallets.tabs.withdraw.modal.confirmation': 'Подтверждение',
  'page.body.wallets.tabs.withdraw.modal.message1': 'Вы выводите ',
  'page.body.wallets.tabs.withdraw.modal.message2': ' на кошелек',
  'page.body.wallets.tabs.withdraw.modal.button.cancel': 'Отменить',
  'page.body.wallets.tabs.withdraw.modal.button.withdraw': 'Вывести',

  'page.body.wallets.tabs.withdraw.content.enable2fa': 'Вам нужно активировать 2FA, чтобы получить возможность выводить Ваши валюты!',
  'page.body.wallets.tabs.withdraw.content.enable2faButton': 'Активировать 2FA',

  'page.body.openOrders.tab.all': 'Все',
  'page.body.openOrders.tab.open': 'Открытые',
  'page.body.openOrders.header.orderType': 'Тип сделаки',
  'page.body.openOrders.header.orderType.buy.market': 'Купить / Рынок',
  'page.body.openOrders.header.orderType.buy.limit': 'Купить / Лимит',
  'page.body.openOrders.header.orderType.sell.market': 'Продать / Рынок',
  'page.body.openOrders.header.orderType.sell.limit': 'Продать / Лимит',
  'page.body.openOrders.header.pair': 'Рыночная пара',
  'page.body.openOrders.header.amount': 'Кол.',
  'page.body.openOrders.header.price': 'Цена',
  'page.body.openOrders.header.executed': 'Выполнено',
  'page.body.openOrders.header.remaining': 'Осталось',
  'page.body.openOrders.header.costRemaining': 'Остаточная стоимость',
  'page.body.openOrders.header.status': 'Статус',
  'page.body.openOrders.content.status.done': 'Совершен',
  'page.body.openOrders.content.status.wait': 'Ожидание',
  'page.body.openOrders.content.status.cancel': 'Отменен',
  'page.body.openOrders.header.button.cancelAll': 'Отменить все',

  'page.body.history.deposit': 'История депозитов',
  'page.body.history.deposit.header.txid': 'txID',
  'page.body.history.deposit.header.date': 'Дата',
  'page.body.history.deposit.header.currency': 'Валюта',
  'page.body.history.deposit.header.amount': 'Количество',
  'page.body.history.deposit.header.status': 'Статус',
  'page.body.history.deposit.content.status.accepted': 'Принят',
  'page.body.history.deposit.content.status.collected': 'Собран',
  'page.body.history.deposit.content.status.submitted': 'Отправлен',
  'page.body.history.deposit.content.status.canceled': 'Отменен',
  'page.body.history.deposit.content.status.rejected': 'Отвергнут',
  'page.body.history.deposit.content.status.skipped': 'Пропущен',

  'page.body.history.withdraw': 'История выводов',
  'page.body.history.withdraw.header.id': 'ID',
  'page.body.history.withdraw.header.date': 'Дата',
  'page.body.history.withdraw.header.currency': 'Валюта',
  'page.body.history.withdraw.header.address': 'Адресс',
  'page.body.history.withdraw.header.amount': 'Сумма',
  'page.body.history.withdraw.header.fee': 'Налог',
  'page.body.history.withdraw.header.status': 'Статус',
  'page.body.history.withdraw.content.status.prepared': 'Подготовлен',
  'page.body.history.withdraw.content.status.submitted': 'Отправлен',
  'page.body.history.withdraw.content.status.canceled': 'Отменен',
  'page.body.history.withdraw.content.status.accepted': 'Принят',
  'page.body.history.withdraw.content.status.suspected': 'Просматривается',
  'page.body.history.withdraw.content.status.rejected': 'Отвергнут',
  'page.body.history.withdraw.content.status.processing': 'Обрабатывается',
  'page.body.history.withdraw.content.status.succeed': 'Успешно',
  'page.body.history.withdraw.content.status.failed': 'Неуспешно',
  'page.body.history.withdraw.content.status.confirming': 'Подверждается',

  'page.body.history.trade': 'История сделок',
  'page.body.history.trade.header.id': 'ID',
  'page.body.history.trade.header.date': 'Дата',
  'page.body.history.trade.header.side': 'Сторона',

  'page.body.history.trade.content.side.buy': 'Купить',
  'page.body.history.trade.content.side.sell': 'Продать',

  'page.body.history.trade.header.market': 'Рынок',
  'page.body.history.trade.header.price': 'Цена',
  'page.body.history.trade.header.funds': 'Капитал',
  'page.body.history.trade.header.amount': 'Кол.',
  'page.body.history.trade.header.balance': 'Баланс',

  'page.body.profile.header.account': 'Профиль',

  'page.body.profile.header.account.content.password': 'Пароль',
  'page.body.profile.header.account.content.password.button.change': 'Изменить',
  'page.body.profile.header.account.content.password.old': 'Старый пароль',
  'page.body.profile.header.account.content.password.new': 'Новый пароль',
  'page.body.profile.header.account.content.password.button.save': 'Сохранить',
  'page.body.profile.header.account.content.password.button.cancel': 'Отменить',

  'page.body.profile.header.account.content.twoFactorAuthentication': 'Двухфакторная аутентификация',
  'page.body.profile.header.account.content.twoFactorAuthentication.message.enable': 'Включен',
  'page.body.profile.header.account.content.twoFactorAuthentication.message.disable': 'Отключен',
  'page.body.profile.header.account.content.twoFactorAuthentication.header': 'Включить двухфакторную аутентификацию',
  'page.body.profile.header.account.content.twoFactorAuthentication.subHeader': '6-ти значный код GAuthenticator',
  'page.body.profile.header.account.content.twoFactorAuthentication.enable': 'ВКЛЮЧИТЬ 2FA',
  'page.body.profile.header.account.content.twoFactorAuthentication.disable': 'ОТКЛЮЧЕНА 2FA',
  'page.body.profile.header.account.content.twoFactorAuthentication.modalBody': 'Пожалуйста, обратитесь с администратором, чтобы отключить еe.',
  'page.body.profile.header.account.content.twoFactorAuthentication.modalHeader': 'Двухфакторная аутентификация включена.',
  'page.body.profile.header.account.content.twoFactorAuthentication.info': 'Это ваш секретный код, который можно использовать для получения доступа к Вашему ' +
                                                                            '2fa-коду с разных устройств и для восстановления доступа в случае потери вашего устройства. ' +
                                                                            'Обязательно сохраните код',

  'page.body.profile.header.account.profile': 'Верификация Вашего профиля',
  'page.body.profile.header.account.profile.email.title': 'Почта - подтверждено',
  'page.body.profile.header.account.profile.email.message': 'Депозиты и вывод средств не разрешены',
  'page.body.profile.header.account.profile.phone.unverified.title': 'Телефон - подтвердить',
  'page.body.profile.header.account.profile.phone.title': 'Телефон - подтверждено',
  'page.body.profile.header.account.profile.phone.message': 'Депозиты и торги разрешены',
  'page.body.profile.header.account.profile.identity.unverified.title': 'Личность - подтвердить',
  'page.body.profile.header.account.profile.identity.title': 'Личность - подтверждено',
  'page.body.profile.header.account.profile.identity.message': 'Вывод средств разрешен',

  'page.body.profile.header.referralProgram': 'Реферальная программа',
  'page.body.profile.content.copyLink': 'Скопировать',

  'page.body.profile.header.accountActivity': 'Активность аккаунта',
  'page.body.profile.header.accountActivity.content.date': 'Дата',
  'page.body.profile.header.accountActivity.content.addressip': 'IP адрес',
  'page.body.profile.header.accountActivity.content.action': 'Действие',
  'page.body.profile.header.accountActivity.content.result': 'Результат',
  'page.body.profile.header.accountActivity.content.userAgent': 'Пользовательский Агент',

  'page.body.profile.content.action.login': 'Вход в систему',
  'page.body.profile.content.action.logout': 'Выход из системы',
  'page.body.profile.content.action.request2fa': 'Запрошен QR-код для 2FA',
  'page.body.profile.content.action.enable2fa': 'Активация 2FA',
  'page.body.profile.content.action.login.2fa': 'Вход в систему с 2FA',
  'page.body.profile.content.action.requestPasswordReset': 'Запрос на сброс пароля',
  'page.body.profile.content.action.passwordReset': 'Сброс пароля',

  'page.body.profile.content.result.succeed': 'Успешно',
  'page.body.profile.content.result.failed': 'Ошибка',

  'page.body.kyc.phone.head': 'Давайте проверим ваш телефон',
  'page.body.kyc.phone.enterPhone': 'Введите свой номер телефона',
  'page.body.kyc.phone.phoneNumber': 'Номер Телефона',
  'page.body.kyc.phone.enterCode': 'Введите код, который Вы получили',
  'page.body.kyc.phone.code': 'СМС',
  'page.body.kyc.phone.send': 'ОТПРАВИТЬ КОД',
  'page.body.kyc.phone.resend': 'ПЕРЕСЛАТЬ КОД',
  'page.body.kyc.identity.firstName': 'Имя',
  'page.body.kyc.identity.lastName': 'Фамилия',
  'page.body.kyc.identity.dateOfBirth': 'Дата рождения ДД/ММ/ГГГГ',
  'page.body.kyc.identity.residentialAddress': 'Место проживания',
  'page.body.kyc.identity.city': 'Город',
  'page.body.kyc.identity.postcode': 'Почтовый индекс',
  'page.body.kyc.documents.expiryDate': 'Действителен до DD/MM/YYYY',
  'page.body.kyc.documents.drag': 'Перетащите или загрузите файлы',
  'page.body.kyc.documents.maxFile': 'Максимальный размер 20MB',
  'page.body.kyc.documents.maxNum': 'Максимальное число 5',
  'page.body.kyc.documents.upload': 'Загрузите свое удостоверение личности с фотографией',
  'page.body.kyc.documents.number': ': Номер документа',

  'page.body.kyc.documents.select.passport': 'Паспорт',
  'page.body.kyc.documents.select.identityCard': 'Удостоверение личности',
  'page.body.kyc.documents.select.driverLicense': 'Водительское удостоверение',
  'page.body.kyc.documents.select.utilityBill': 'Счет за коммунальные услуги',

  'page.body.kyc.next': 'Дальше',
  'page.body.kyc.head.phone': 'Верификация телефона',
  'page.body.kyc.head.identity': 'Верификация личности',
  'page.body.kyc.head.document': 'Верификация документов',

  'page.footer.legalDocuments': 'Документы',
  'page.footer.faq': 'Помощь',
  'page.footer.language': 'Язык',

  'page.header.signIn': 'Войти',
  'page.header.signIn.email': 'Почта',
  'page.header.signIn.password': 'Пароль',
  'page.header.signIn.receiveConfirmation': 'Не получили подтверждение по электронной почте?',
  'page.header.signIn.forgotPassword': 'Забыли пароль?',
  'page.header.signIn.createAccount': 'Создать аккаунт?',

  'page.header.signUp': 'Регистрация',
  'page.header.signUp.email': 'Почта',
  'page.header.signUp.password': 'Пароль',
  'page.header.signUp.confirmPassword': 'Подтвердить пароль',
  'page.header.signUp.referalCode': 'Промо-код',
  'page.header.signUp.terms': 'Я согласен со всеми заявлениями с точки зрения обслуживания',
  'page.header.signUp.modal.header': 'ПРОВЕРЬТЕ СВОЙ АДРЕС ЭЛЕКТРОННОЙ ПОЧТЫ',
  'page.header.signUp.modal.body': 'Чтобы завершить регистрацию, найдите в своем' +
                                   ' почтовом ящике электронное письмо с дальнейшими инструкциями. ' +
                                   'Если вы не можете найти адрес электронной почты, проверьте свою' +
                                   ' электронную почту со спамом.',

  'page.resendConfirmation': 'Отправить подтверждение снова',
  'page.forgotPassword': 'Забыли пароль',
  'page.forgotPassword.email': 'Почта',
  'page.forgotPassword.send': 'Отправить',
  'page.noDataToShow': 'Нет данных для отображения',

  'page.modal.withdraw.success': 'Успех!',
  'page.modal.withdraw.success.message.content': 'Ваш вывод был успешно подтвержден. Пожалуйста, подождите, чтобы получить ' +
                                                 'несколько обязательных подтверждений для завершения этой транзакции.',
  'page.modal.withdraw.success.button': 'OK',
};
