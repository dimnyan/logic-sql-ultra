select a.id as id, a.name as name, b.name as parent_name
from names as a
left join names as b on a.parent_id = b.id;
