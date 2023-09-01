select Person.firstName, Person.lastName, Address.City, Address.State
from Person left join Address
on Person.personId = Address.personId