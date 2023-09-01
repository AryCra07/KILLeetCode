select (select distinct salary
        from employee
        order by salary desc
        limit 1 offset 1) as SecondHighestSalary

/*
 使用自查询可以满足题目中 '查不到则返回null' 的要求
 limit 1 offset 1 = limit 1, 1
 */