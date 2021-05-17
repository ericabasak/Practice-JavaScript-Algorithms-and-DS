# ruby practice

def greet(name)
  puts "hi #{name}"
end

greet("baby")

arr = [1,2,7,0,55]

arr.each {|elem| puts elem}

arr = [1,2,7,0,55]

arr.each_index {|elem| puts elem, "---"}

arr = [1,2,7,0,55]

arr.each_index {|elem| puts elem, "***"}

arr = [1,2,7,0,55]

arr.each_with_index {|elem, index| puts "index: #{index} is #{elem} in the arr"}



arr = ["cat", "dog"]

arr.map {|animal| puts animal}

arr = ["cat", "dog"]

arr.map! {|animal| puts animal}




(1..10).select do |item|
  puts item.even?
end

(1..10).select do |item|
  item.even?
end

(1..10).select do |item|
  item.odd?
end

(0..10).select do |num, index|
  puts "index: #{index} is #{num.even?}"
end
