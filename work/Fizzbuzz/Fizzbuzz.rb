1.upto(100) { |num| 
  puts "Fizzbuzz" if num % 3 == 0 && num % 5 == 0
  puts "Fizz" if num % 3 == 0
  puts "Buzz" if num % 5 == 0
  puts num
}