import binascii

#returns -1 if barr1 is less, 1 if barr1 is greater, and 0 if equal
def bytearr_cmp(barr1, barr2):
	pos = 0
	while (pos < len(barr1) and pos < len(barr2)):
		if (barr1[pos] < barr2[pos]):
			return -1;
		elif (barr1[pos] > barr2[pos]):
			return 1;
		pos = pos + 1
	#the shorter array will be ordered first
	if (len(barr1) < len(barr2)):
		return -1
	elif (len(barr1) > len(barr2)):
		return 1
	else:
		return 0

#tuples: (prev_tx_hash_byte_arr_little_endian, prev_tx_output_index)
def input_cmp(input_tuple1, input_tuple2):
	#test prev_tx_hash_byte_arr_little_endian first
	prev_tx_hash_cmp = bytearr_cmp(input_tuple1[0], input_tuple2[0])
	if (prev_tx_hash_cmp != 0):
		return prev_tx_hash_cmp
	#tie-breaker: prev_tx_output_index
	if (input_tuple1[1] < input_tuple2[1]):
		return -1
	elif (input_tuple1[1] > input_tuple2[1]):
		return 1
	else:
		raise ValueError('Matching previous transaction hash and previous transaction output index for two disinct inputs. Invalid!')

def sort_inputs(input_tuples):
	return sorted(input_tuples, cmp=input_cmp)

def print_inputs(ordered_input_tuples):
	index = 0
	for prev_tx_hash_byte_arr_little_endian, prev_tx_output_index in ordered_input_tuples:
		prev_tx_hash_hex = binascii.hexlify(bytearray(prev_tx_hash_byte_arr_little_endian))
		print("%d: %s[%d]" % (index, prev_tx_hash_hex, prev_tx_output_index))
		index = index + 1

#tuples: (amount, scriptPubKey_byte_arr)
def output_cmp(output_tuple1, output_tuple2):
	#test amount first
	if (output_tuple1[0] < output_tuple2[0]):
		return -1
	elif (output_tuple1[0] > output_tuple2[0]):
		return 1
	#tie-breaker: scriptPubKey_byte_arr
	return bytearray_cmp(output_tuple1[1], output_tuple2[1])

def sort_outputs(output_tuples):
	return sorted(output_tuples, cmp=output_cmp)

def print_outputs(ordered_output_tuples):
	index = 0
	for amount, scriptPubKey_byte_arr in ordered_output_tuples:
		scriptPubKey_hex = binascii.hexlify(bytearray(scriptPubKey_byte_arr))
		print("%d:\t%d\t%s" % (index, amount, scriptPubKey_hex))
		index = index + 1

def main():
	#reference data: https://blockchain.info/rawtx/0a6a357e2f7796444e02638749d9611c008b253fb55f5dc88b739b230ed0c4c3
	tx_0a6a_input_tuples = [
		# (prev_tx_hash_byte_arr_little_endian, prev_tx_output_index)
		([0x64, 0x3e, 0x5f, 0x4e, 0x66, 0x37, 0x3a, 0x57, 0x25, 0x1f, 0xb1, 0x73, 0x15, 0x1e, 0x83, 0x8c, 0xcd, 0x27, 0xd2, 0x79, 0xac, 0xa8, 0x82, 0x99, 0x7e, 0x00, 0x50, 0x16, 0xbb, 0x53, 0xd5, 0xaa], 0),
		([0x28, 0xe0, 0xfd, 0xd1, 0x85, 0x54, 0x2f, 0x2c, 0x6e, 0xa1, 0x90, 0x30, 0xb0, 0x79, 0x60, 0x51, 0xe7, 0x77, 0x2b, 0x60, 0x26, 0xdd, 0x5d, 0xdc, 0xcd, 0x7a, 0x2f, 0x93, 0xb7, 0x3e, 0x6f, 0xc2], 0),
		([0xf0, 0xa1, 0x30, 0xa8, 0x49, 0x12, 0xd0, 0x3c, 0x1d, 0x28, 0x49, 0x74, 0xf5, 0x63, 0xc5, 0x94, 0x9a, 0xc1, 0x3f, 0x83, 0x42, 0xb8, 0x11, 0x2e, 0xdf, 0xf5, 0x29, 0x71, 0x59, 0x9e, 0x6a, 0x45], 0),
		([0x0e, 0x53, 0xec, 0x5d, 0xfb, 0x2c, 0xb8, 0xa7, 0x1f, 0xec, 0x32, 0xdc, 0x9a, 0x63, 0x4a, 0x35, 0xb7, 0xe2, 0x47, 0x99, 0x29, 0x5d, 0xdd, 0x52, 0x78, 0x21, 0x78, 0x22, 0xe0, 0xb3, 0x1f, 0x57], 0),
		([0x38, 0x1d, 0xe9, 0xb9, 0xae, 0x1a, 0x94, 0xd9, 0xc1, 0x7f, 0x6a, 0x08, 0xef, 0x9d, 0x34, 0x1a, 0x5c, 0xe2, 0x9e, 0x2e, 0x60, 0xc3, 0x6a, 0x52, 0xd3, 0x33, 0xff, 0x62, 0x03, 0xe5, 0x8d, 0x5d], 1),
		([0xf3, 0x20, 0x83, 0x2a, 0x9d, 0x2e, 0x24, 0x52, 0xaf, 0x63, 0x15, 0x4b, 0xc6, 0x87, 0x49, 0x34, 0x84, 0xa0, 0xe7, 0x74, 0x5e, 0xbd, 0x3a, 0xaf, 0x9c, 0xa1, 0x9e, 0xb8, 0x08, 0x34, 0xad, 0x60], 0),
		([0xde, 0x04, 0x11, 0xa1, 0xe9, 0x74, 0x84, 0xa2, 0x80, 0x4f, 0xf1, 0xdb, 0xde, 0x26, 0x0a, 0xc1, 0x9d, 0xe8, 0x41, 0xbe, 0xba, 0xd1, 0x88, 0x0c, 0x78, 0x29, 0x41, 0xac, 0xa8, 0x83, 0xb4, 0xe9], 1),
		([0x3b, 0x8b, 0x2f, 0x8e, 0xfc, 0xeb, 0x60, 0xba, 0x78, 0xca, 0x8b, 0xba, 0x20, 0x6a, 0x13, 0x7f, 0x14, 0xcb, 0x5e, 0xa4, 0x03, 0x5e, 0x76, 0x1e, 0xe2, 0x04, 0x30, 0x2d, 0x46, 0xb9, 0x8d, 0xe2], 0),
		([0x54, 0xff, 0xff, 0x18, 0x29, 0x65, 0xed, 0x09, 0x57, 0xdb, 0xa1, 0x23, 0x9c, 0x27, 0x16, 0x4a, 0xce, 0x5a, 0x73, 0xc9, 0xb6, 0x2a, 0x66, 0x0c, 0x74, 0xb7, 0xb7, 0xf1, 0x5f, 0xf6, 0x1e, 0x7a], 1),
		([0xba, 0xfd, 0x65, 0xe3, 0xc7, 0xf3, 0xf9, 0xfd, 0xfd, 0xc1, 0xdd, 0xb0, 0x26, 0x13, 0x1b, 0x27, 0x8c, 0x3b, 0xe1, 0xaf, 0x90, 0xa4, 0xa6, 0xff, 0xa7, 0x8c, 0x46, 0x58, 0xf9, 0xec, 0x0c, 0x85], 0),
		([0xa5, 0xe8, 0x99, 0xdd, 0xdb, 0x28, 0x77, 0x6e, 0xa9, 0xdd, 0xac, 0x0a, 0x50, 0x23, 0x16, 0xd5, 0x3a, 0x4a, 0x3f, 0xca, 0x60, 0x7c, 0x72, 0xf6, 0x6c, 0x47, 0x0e, 0x04, 0x12, 0xe3, 0x40, 0x86], 0),
		([0x7a, 0x1d, 0xe1, 0x37, 0xcb, 0xaf, 0xb5, 0xc7, 0x04, 0x05, 0x45, 0x5c, 0x49, 0xc5, 0x10, 0x4c, 0xa3, 0x05, 0x7a, 0x1f, 0x12, 0x43, 0xe6, 0x56, 0x3b, 0xb9, 0x24, 0x5c, 0x9c, 0x88, 0xc1, 0x91], 0),
		([0x26, 0xaa, 0x6e, 0x6d, 0x8b, 0x9e, 0x49, 0xbb, 0x06, 0x30, 0xaa, 0xc3, 0x01, 0xdb, 0x67, 0x57, 0xc0, 0x2e, 0x36, 0x19, 0xfe, 0xb4, 0xee, 0x0e, 0xea, 0x81, 0xeb, 0x16, 0x72, 0x94, 0x70, 0x24], 1),
		([0x40, 0x2b, 0x2c, 0x02, 0x41, 0x17, 0x20, 0xbf, 0x40, 0x9e, 0xff, 0x60, 0xd0, 0x5a, 0xda, 0xd6, 0x84, 0xf1, 0x35, 0x83, 0x89, 0x62, 0x82, 0x3f, 0x36, 0x14, 0xcc, 0x65, 0x7d, 0xd7, 0xbc, 0x0a], 1),
		([0x7d, 0x03, 0x7c, 0xeb, 0x2e, 0xe0, 0xdc, 0x03, 0xe8, 0x2f, 0x17, 0xbe, 0x79, 0x35, 0xd2, 0x38, 0xb3, 0x5d, 0x1d, 0xea, 0xbf, 0x95, 0x3a, 0x89, 0x2a, 0x45, 0x07, 0xbf, 0xbe, 0xeb, 0x3b, 0xa4], 1),
		([0x6c, 0x1d, 0x56, 0xf3, 0x1b, 0x2d, 0xe4, 0xbf, 0xc6, 0xaa, 0xea, 0x28, 0x39, 0x6b, 0x33, 0x31, 0x02, 0xb1, 0xf6, 0x00, 0xda, 0x9c, 0x6d, 0x61, 0x49, 0xe9, 0x6c, 0xa4, 0x3f, 0x11, 0x02, 0xb1], 1),
		([0xb4, 0x11, 0x2b, 0x8f, 0x90, 0x0a, 0x7c, 0xa0, 0xc8, 0xb0, 0xe7, 0xc4, 0xdf, 0xad, 0x35, 0xc6, 0xbe, 0x5f, 0x6b, 0xe4, 0x6b, 0x34, 0x58, 0x97, 0x49, 0x88, 0xe1, 0xcd, 0xb2, 0xfa, 0x61, 0xb8], 0)]
	tx_0a6a_sorted_input_tuples = sort_inputs(tx_0a6a_input_tuples)
	print_inputs(tx_0a6a_sorted_input_tuples)

	tx_0a6a_output_tuples = [
		# (amount, scriptPubKey_byte_arr)
		(400057456, [0x76, 0xa9, 0x14, 0x4a, 0x5f, 0xba, 0x23, 0x72, 0x13, 0xa0, 0x62, 0xf6, 0xf5, 0x79, 0x78, 0xf7, 0x96, 0x39, 0x0b, 0xdc, 0xf8, 0xd0, 0x15, 0x88, 0xac]),
		(40000000000, [0x76, 0xa9, 0x14, 0x5b, 0xe3, 0x26, 0x12, 0x93, 0x0b, 0x83, 0x23, 0xad, 0xd2, 0x21, 0x2a, 0x4e, 0xc0, 0x3c, 0x15, 0x62, 0x08, 0x4f, 0x84, 0x88, 0xac])]
	tx_0a6a_sorted_output_tuples = sort_outputs(tx_0a6a_output_tuples)
	print_outputs(tx_0a6a_sorted_output_tuples)

	#reference data: https://blockchain.info/rawtx/28204cad1d7fc1d199e8ef4fa22f182de6258a3eaafe1bbe56ebdcacd3069a5f thanks @quantabytes!
	tx_2820_input_tuples = [
		# (prev_tx_hash, prev_tx_output_index)
		("35288d269cee1941eaebb2ea85e32b42cdb2b04284a56d8b14dcc3f5c65d6055", 0),
		("35288d269cee1941eaebb2ea85e32b42cdb2b04284a56d8b14dcc3f5c65d6055", 1)] #duplicate prev_tx_hash

	tx_2820_sorted_input_tuples = sort_inputs(tx_2820_input_tuples)
	print_inputs(tx_2820_sorted_input_tuples)

	tx_2820_output_tuples = [
		# (amount, scriptPubKey_byte_arr)
		(100000000, [0x41, 0x04, 0x6a, 0x07, 0x65, 0xb5, 0x86, 0x56, 0x41, 0xce, 0x08, 0xdd, 0x39, 0x69, 0x0a, 0xad, 0xe2, 0x6d, 0xfb, 0xf5, 0x51, 0x14, 0x30, 0xca, 0x42, 0x8a, 0x30, 0x89, 0x26, 0x13, 0x61, 0xce, 0xf1, 0x70, 0xe3, 0x92, 0x9a, 0x68, 0xae, 0xe3, 0xd8, 0xd4, 0x84, 0x8b, 0x0c, 0x51, 0x11, 0xb0, 0xa3, 0x7b, 0x82, 0xb8, 0x6a, 0xd5, 0x59, 0xfd, 0x2a, 0x74, 0x5b, 0x44, 0xd8, 0xe8, 0xd9, 0xdf, 0xdc, 0x0c, 0xac]),
		(2400000000, [0x41, 0x04, 0x4a, 0x65, 0x6f, 0x06, 0x58, 0x71, 0xa3, 0x53, 0xf2, 0x16, 0xca, 0x26, 0xce, 0xf8, 0xdd, 0xe2, 0xf0, 0x3e, 0x8c, 0x16, 0x20, 0x2d, 0x2e, 0x8a, 0xd7, 0x69, 0xf0, 0x20, 0x32, 0xcb, 0x86, 0xa5, 0xeb, 0x5e, 0x56, 0x84, 0x2e, 0x92, 0xe1, 0x91, 0x41, 0xd6, 0x0a, 0x01, 0x92, 0x8f, 0x8d, 0xd2, 0xc8, 0x75, 0xa3, 0x90, 0xf6, 0x7c, 0x1f, 0x6c, 0x94, 0xcf, 0xc6, 0x17, 0xc0, 0xea, 0x45, 0xaf, 0xac])]
	tx_2820_sorted_output_tuples = sort_outputs(tx_2820_output_tuples)
	print_outputs(tx_2820_output_tuples)

if __name__ ## "__main__":
	main()