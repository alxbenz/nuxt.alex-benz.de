import commonDE from './lang/de/common.json';
import contentDE from './lang/de/content.json';
import imprintDE from './lang/de/imprint.json';
import privacyDE from './lang/de/privacy.json';

import commonEN from './lang/en/common.json';
import contentEN from './lang/en/content.json';
import imprintEN from './lang/en/imprint.json';
import privacyEN from './lang/en/privacy.json';

export default defineI18nConfig(() => ({
    messages: {
        de: {
            ...commonDE,
            ...contentDE,
            ...imprintDE,
            ...privacyDE,
        },
        en: {
            ...commonEN,
            ...contentEN,
            ...imprintEN,
            ...privacyEN,
        }
    },
}))
