const paginator = (items, page, per_page) => {
  var page = +page || 1,
    per_page = per_page || 10,
    offset = (page - 1) * per_page,
    paginatedItems = items.slice(offset).slice(0, per_page),
    total_pages = Math.ceil(items.length / per_page);
  return {
    results: paginatedItems,
    page: page,
    total_pages: total_pages,
  };
};

module.exports = paginator;
