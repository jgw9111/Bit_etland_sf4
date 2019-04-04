package com.bit_et_land.web.cate;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.bit_et_land.web.cmm.Proxy;

@Repository
public interface CategoryMapper {
	public Category txCategory(String categoryName);
	public Category selectCategory(Category cate);
    public List<Category> bringCategoryLists(Proxy pxy);
    public List<Category> retrieveCategorys(String city);
    public Category retrieveCategory(String categoryId);
    public int countCategory();
    public boolean existsCategory(String categoryId);
    public void modifyCategory(Category cate);
    public void removeCategory(Category cate);
}
