const faqTemplate = require.resolve('./src/templates/faq/index');

const createFaqPage = async (createPage) => {
  const faqPagePath = `/faq`;
  createPage({
    path: faqPagePath,
    component: faqTemplate,
  });
};

exports.createPages = async ({ actions }, options) => {
  const { createPage } = actions;

  await createFaqPage(createPage);
};
