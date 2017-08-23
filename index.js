import React from 'react';
import PropTypes from 'prop-types';

export const config = {
  translations:{},
  locale:''
}

export const setTranslations = (translations) => config.translations = translations;
export const setLocale = (locale) => config.locale = locale;
export const getCurrentLocale = () => config.translations[config.locale];

export const getText = (id, values) => getCurrentLocale()  &&
                                       getCurrentLocale()[id] &&
                                       getCurrentLocale()[id].call(this,values);

const Translations = (props) => (
  <span>{getText(props.id, props)}</span>
)

export default Translations;
