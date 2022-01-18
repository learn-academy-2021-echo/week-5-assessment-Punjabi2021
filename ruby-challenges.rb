# # ASSESSMENT 5: Ruby Coding Practical Questions
# # MINASWAN
#
# # --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.
#
# beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
#
# letter_o = 'o'
# # Expected output: ['coffee', 'soda water']
# letter_t = 't'
# # Expected output: ['tea', 'water', 'soda water']
#  def filter_words(array,letter)
#      array.select{|item|item.include?(letter)}
#      end
# puts filter_words(beverages_array,letter_o)
# puts filter_words(beverages_array,letter_t)
# # -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.
#
# nums_array1 = [42, 7, 27]
# # Expected output: 76
#
# nums_array2 = [25, 17, 47, 11]
# # Expected output: 100
#
# def nums_arrays(bannana)
#     bannana.sum
# end
# p nums_arrays(nums_array1)
# p nums_arrays(nums_array2)



# def nums_arrays(bannana)
# bannana.inject(:+)
# end
# p nums_arrays(nums_array1)
# p nums_arrays(nums_array2)




# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.
# I attempted to write a method to answer this question but it was incorrect so i used the the example in the lecture as a example and had it fit my needs.
# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# class Bike
#     attr_accessor :model, :wheels
#     attr_reader :speed
#     def initialize(color_param='Unpainted', speed_param=0)
#         @model
#         @wheels = 2 wheels_param
#         @speed = 0 speed_param
#     end
#     def accelerate increase_param
#             # @speed = @speed + increase_param
#             @speed += increase_param
#         end
# end


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

class Bike
    attr_accessor :model, :wheels
    attr_reader :speed
    def initialize(speed_param=0)
        @model
        @wheels = 2 wheels_param
        @speed =  0 speed_param
    end
    def accelerate increase_param
            # @speed = @speed + increase_param
            @speed += increase_param
        end
            end
def my_bike pedal
  if pedal is @speed +10
elsif @speed=10 +18:speed_param
end
end
